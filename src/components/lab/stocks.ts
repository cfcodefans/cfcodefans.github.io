import { differenceInBusinessDays, format } from "date-fns"
import { sliceMean, yesterday } from "lib/commons"


export namespace STOCK {
    export type DailySeq<T> = {
        date: Date
        x: string
        y: T
    }

    export function movingAverage(dailyPrices: number[], span: number = 5): number[] {
        if (dailyPrices.length < 5) return dailyPrices

        const averagePrices: number[] = new Array(dailyPrices.length)
        for (let i: number = 0, j = dailyPrices.length; i < j; i++) {
            averagePrices[i] = sliceMean(dailyPrices, i - span, i)
        }
        return averagePrices
    }

    export type TStockData = {
        date: Date
        open: number
        close: number
        gain: number
        gainPercent: number
        low: number
        high: number
        volume: number
        turnover?: number
        trade: number
    }

    export namespace SOHU_STOCK {

        export function toTStockData(raw: string[]): TStockData {
            const [_date, _open, _close, _gain, _gainPercent, _low, _high, _volume, _turnover, _trade] = raw
            return {
                date: new Date(_date),
                open: parseFloat(_open),
                close: parseFloat(_close),
                gain: parseFloat(_gain),
                gainPercent: parseFloat(_gainPercent),
                low: parseFloat(_low),
                high: parseFloat(_high),
                volume: parseFloat(_volume),
                turnover: parseFloat(_turnover),
                trade: parseFloat(_trade)
            }
        }

        export type RawResp = {
            code: string
            hq: string[][]
            status: string
            stat: string[]
        }

        export type STAT_FLG = "0" | "1"
        export type ORDER_FLG = "D" | "A"
        export type PERIOD = "d" | "m" | "w"

        export function mkJsonpUrlReq(
            callbackFnName: string,
            country: string,
            code: number,
            start: Date = new Date(),
            end: Date = new Date(),
            stat: STAT_FLG = "1",
            order: ORDER_FLG = "A",
            period: PERIOD = "d"
        ): string {
            const _url: URL = new URL("http://q.stock.sohu.com/hisHq")

            const params: URLSearchParams = _url.searchParams
            params.append("code", `${country}_${code}`)
            params.append("start", format(start, "yyyyMMdd"))
            params.append("end", format(end, "yyyyMMdd"))
            params.append("stat", stat)
            params.append("order", order)
            params.append("period", period)
            params.append("callback", callbackFnName)
            params.append("rt", "jsonp")

            return _url.href
            //http://q.stock.sohu.com/hisHq?code=cn_600009&start=20180716&end=20180720&stat=1&order=D&period=d&callback=historySearchHandler&rt=jsonp
        }
    }

    export type EXCHANGE = "szse" | "sse" 

    export namespace HEXUN_STOCK {
        export function mkJsonpUrlReq(callbackFnName: string,
            exchange: EXCHANGE,
            code: string,
            start: Date = yesterday(),
            end: Date = new Date()): string {
            const _url: URL = new URL("http://webstock.quote.hermes.hexun.com/a/kline")

            const params: URLSearchParams = _url.searchParams
            params.append("code", exchange + code)
            params.append("end", format(end, "yyyyMMdd") + "150000")
            params.append("number", (-differenceInBusinessDays(start, end)).toString())
            params.append("type", "5")
            params.append("callback", callbackFnName)

            return _url.href
        }

        export type RawResp = {
            KLine: { [key: string]: string }
            TABLE: { [key: string]: string }
            data: any[]
        }

        export function toTStockData(raw: number[]): TStockData {
            const [_date, _lastClose, _open, _close, _high, _low, _volume, _trade] = raw
            return {
                date: new Date(_date),
                open: _open,
                close: _close,
                gain: _close - _lastClose,
                gainPercent: (_close - _lastClose) / _close,
                low: _low,
                high: _high,
                volume: _volume,
                // turnover: parseFloat(_turnover),
                trade: _trade
            }
        }
    }
}