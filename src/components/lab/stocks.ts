import { i, sliceMean } from "lib/commons"
import { format } from "date-fns"
import _ from "lodash"


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

    export namespace SOHU_STOCK {
        export type TStockData = {
            date: Date
            open: number
            close: number
            gain: number
            gainPercent: number
            low: number
            high: number
            volume: number
            turnover: number
            trade: number
        }

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


        export class StockData {
            constructor(public date: Date,
                public open: number,
                public close: number,
                public gain: number,
                public gainPercent: number,
                public low: number,
                public high: number,
                public volume: number,
                public turnover: number,
                public trade: number) {
                i("stock.ts", "StockData", this)
            }

            static make(raw: string[]): StockData {
                const [_date, _open, _close, _gain, _gainPercent, _low, _high, _volume, _turnover, _trade] = raw
                return new StockData(new Date(_date),
                    parseFloat(_open),
                    parseFloat(_close),
                    parseFloat(_gain),
                    parseFloat(_gainPercent),
                    parseFloat(_low),
                    parseFloat(_high),
                    parseFloat(_volume),
                    parseFloat(_turnover),
                    parseFloat(_trade))
            }
        }

        export class PeriodStat {
            constructor(public periodStr: string,
                public gain: number,
                public gainPercent: number,
                public low: number,
                public high: number,
                public volume: number,
                public turnover: number,
                public trade: number) { }

            static make(raw: string): PeriodStat {
                const [mark, _periodStr, _gain, _gainPercent, _low, _high, _volume, _turnover, _trade] = raw
                return new PeriodStat(_periodStr,
                    parseFloat(_gain),
                    parseFloat(_gainPercent),
                    parseFloat(_low),
                    parseFloat(_high),
                    parseFloat(_volume),
                    parseFloat(_turnover),
                    parseFloat(_trade))
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

        function dateToParam(d: Date): string {
            return format(d, "yyyyMMdd")
        }

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
            //http://q.stock.sohu.com/hisHq?code=cn_600009&start=20180716&end=20180720&stat=1&order=D&period=d&callback=historySearchHandler&rt=jsonp
            return `http://q.stock.sohu.com/hisHq?code=${country}_${code}&start=${dateToParam(start)}&end=${dateToParam(end)}&stat=1&order=${order}&period=${period}&callback=${callbackFnName}&rt=jsonp`
        }
    }


}