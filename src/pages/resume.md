<h1>Resume of Chen Fan 陈凡</h1>

***

* [1. Objectives](#objectives)
* [2. Contact](#contact)
* [3. Education](#education)
* [4. Certificate](#certificate)
* [5. Experience](#experience)


<h2 id="objectives">1. Objectives</h2>
    
    Hi, I am Chen Fan. 

       I have been working as a java coder and enthusiastic about coding (so much to learn).  
    I aspire to further my programming knowledge, skills and vision of the evolving internet. 

        I firmly believe that internet driven services will flourish through innovations and 
    connection to other industries thus I wish to participate this exploratory process. I 
    believe 
        I could contribute to business success with combination of my experience, creativity, 
    team spirit, most importantly learning ability.

    Thanks and best regards. 

<h2 id="objectives">2. Contact</h2>

* mail: chenfanspost@hotmail.com
* linkedin: https://www.linkedin.com/in/cfcodefans/
* github: https://github.com/cfcodefans

<h2 id="objectives">3. Education</h2>

Computer Science At [Nanjing University of Information science and Technology](https://en.nuist.edu.cn/)

<h2 id="objectives">4. Certificate</h2>

 * OCBCD [Oracle Certificated Business Component Developer](http://java4all.in/java/certificates.php)
 * OCJP [Oracle Certificated Java Programmer](http://java4all.in/java/certificates.php)
 * TOEIC 955 
 * IELTS 6.5

<h2 id="experience">5. Experience</h2>

### Java Coder 
At [The NetCircle](https://thenetcircle.com)
Jun 2012 – Present . 6 yrs 11 mos at Shanghai China

        As Java coder, I started with development of services built with java
    , supporting our websites. Image/Video process, Message queuing, Payment, 
    Single Sign On, Blockchain(NEM)....

        Gradually, I have studied and shifted to data area as our team aims to 
    become data driven. I familiarize tools/framework for data mining, which brought
    me to new horizon.

        As technology & tools always evolve and improve to be more user-friendly, 
    I still feel quite distant to the math/statistic principles behind data science.

        As we generate more and more data in our lives, data also shapes our minds.
    I wish to explore more in this complexity.

        In practice, apart from development for java systems, I have also been working 
    as data engineer, setting up infrastructures like Hadoop cluster, Hive, Kafka. 
    Process clean data for data scientists.

        Overall, I grow with sharing knowleages between amazing colleagues.

#### Projects

##### &nbsp;&nbsp; Community-Token (Feb 2018 - Present) [NEM](https://nem.io/) / Kotlin / Spring-Boot / Mongodb

    The idea is to implement some reward mechanism to reward active users who create great 
    content, contribute in our online community. The trick is possible monetary incentive 
    associated with crypto currency for users, as well as other benefit of block chain tech,
    such as transparency, immutability, convenient as well.

    In detail, NEM features:
    proof of importance,
    multi-sign transaction
    escrow
    atomic swap(exchange) 

    However the transaction speed is always critical impediment to block chain application, 
    caused by nature of block chain tech. To address, we adopt private chain, similar to
    Bitcoin's lightning network.

##### &nbsp;&nbsp; Data-Service-ETL (May 2019 – Present) [Canal](https://github.com/alibaba/canal) / Hive / [Green Plum](https://gpdb.docs.pivotal.io/6-0/main/index.html) / [Superset](https://superset.incubator.apache.org/)

    For data collected from Kafka, I developed UDF in Hive which could pull data from kafka
    with in certain time window defined as parameters. This primarily collects data generated
    by users' actions, as fact table.
    
    Besides this, Canal can impersonate a mysql slave to collect data changes on a mysql instance.
    Dimenson tables changes are collected and stored by date.

    Raw data (ods) collected and load into Hive tables where ETL processes are implemented by 
    Hive SQL, which could utilize some UDF functions I developed, to operate data via http 
    services, Redis, Zookeeper. Hive Storage Handler is also very useful for Hive to access 
    data in various JDBC-compatible data source.

    Data in Hive is loaded into GreenPlum, which is multiple Postgresql instances organized 
    in cluster, able to support adhoc queries. 

    Last piece is Superset, a BI tool which renders data with dozens of different charts.


##### &nbsp;&nbsp; Data-Service-setup (Jul 2018 – Present) Hadoop / Zookeeper / Kafka / Hive / Green Plum

    Install, deploy and configure Hadoop cluster, with High Availability feature, optimized
    settings.

    Install and integrate components for our data services, including: Kafka for event bus;
    Hive for ETL engineer; Green Plum for storage for adhoc queries/charts; Zookeeper to
    support others.

##### &nbsp;&nbsp; Single-Sign-On (Feb 2018 – Jul 2018) [Apache Oltu](https://oltu.apache.org/) / Mongodb / Scala / LDAP

    A single sign on feature built with Apache Oltu Library and LDAP using scala/jersey/webservice, 
    it guards our internal services for users from different departments.

##### &nbsp;&nbsp; Data-misc-tools (Jul 2017 – Feb 2018) Hive / Kafka / Redis / Mysql

    This project hosts several tools to help with development using Hive, Spark. Please check it 
    out on github

    To study and apply how to leverage new features of Hive, Spark, Hadoop for data process, I 
    created and am developing some functions for Hive and spark. It sounds like reinventing wheel, 
    but I believe it has certain value as:

    1. it utilizes the dynamic characteristic of scala language, so that it recognizes the 
    modification of scala script files on HDFS, takes effect immediately, saving the cumbersome 
    steps of compile, package, deployment, restart spark process. Theoretically this can apply 
    other JSR233 compatible languages.

    1.1 I have finished the feature to support python as well, python code can be saved and edited 
    with HUE, then it will take effect immediately too

    2. It can use just HIVE sql to load/send data via HTTP, kafka, Redis with extended HIVE 
    function. Most of a ETL process can be implemented by only HIVE sql.

    3. Some supportive features are also provided, such simple task scheduler, task execution 
    tracking.

    Feedback or contribution is highly appreciated. 
[Source on github](https://github.com/thenetcircle/data-misc-tools)

##### &nbsp;&nbsp; Video Conversion Service (Jan 2016 - Present) [FFmpeg](https://ffmpeg.org/) / Kotlin / [Red5](http://red5.org/)

    A service can convert videos uploaded by users to different formats, also add watermarks 
    and extract thumbnails. I developed this based on Red5 Server with Spring, Spring-MVC and
    kotlin.

    Besides these, we are developing video live-streaming feature to meet the needs of 
    watching video stream on browser of mobile as we learn that majority of accesses 
    are from mobile phones.

##### &nbsp;&nbsp; IPS (Image Process Service) (Jan 2013 - Jul 2018) [OpenCV](https://opencv.org/) / Kotlin / Spring-boot

    The service processes images uploaded by users, with features of crop, scale, overlay 
    text and other images, rotate. 

    The design borrowed the idea of CSS, we define some schemas in json like css to describe
    how the images should be crop, scale, ...etc. Like CSS, we also had variables in the 
    schemas so image processing could be dynamic according to requests.

    The development for this is ongoing for years, as we always found some new challenges.
    Firstly, with upgrade of mobile phones of users led to images significantly increasing in 
    both number and size (3000x2000-ish) over just couple of years. The early version of IPS 
    failed to process images fast. 

    After studying logs and tests, I firstly made processing executed in parallel threads to 
    maximize use of multi-cores; checked the memory footprint to reduce unnecessary copy
     (image data is massive after uncompressing); replaced Processing Library (based on Java) 
    with OpenCV (based on C++);

    I also tried to extend it to support GIF, face recognition, similar image search, etc.

##### &nbsp;&nbsp; Joint (Jul 2014 – Jul 2015) [JavaEE](https://www.oracle.com/java/technologies/java-ee-glance.html) / [Swagger](https://swagger.io/)

    This is actually a open-source and study project. I noticed the great development of 
    frontend technology and gap between it with backend technology.

    Before, Backend tech stack (JSF, PHP...) covers the rendering of HTML with template 
    technology. These became quickly outmoded as webpage development were taken over by
    Javascript libraries.

    However, backend turns to service oriented. Restful services were described by WSDL, 
    which was not recognized by javascript(since js is dynamic, weak-typed language).

    Finally, Typescript alleivated the problem but not ultimate solution. I tried to build
    some library to read, parse the annotations on Restful service API, and automatically
    generate whole bunch of typescript definitions for service invocation.

    Now we know that Swagger does this way better. I still learned a lot from this useless
    project.

##### &nbsp;&nbsp; MQueue Dispatcher (Mar 2014 – 2016) [Rabbit MQueue](https://www.rabbitmq.com) / Java 8 / React

    The system constantly consumes messages from Rabbit MQueue according to predefined rules,
    relays messages over http protocol to corresponding PHP modules. It also implements retry 
    mechanism and failed messages storage for maintenance.

    The design is a series of producer-consumer patterns combined with state transit, with 
    each step performs different tasks: 
    1. pull from queue; 
    2. post to http service;
    3. check result to decide whether to:
        3.1 reply queue with ack;
        3.2 store failed message, mark the retry count;

    The challenge is building a fast assembly line with async queues, and tweak performance
    of HTTP library. 

  
### Senior Java Engineer
At [DB Schenker SSC](https://www.dbschenker.com/global)
Aug 2010 – Jul 2012 . 2 yrs at Nanjing, Jiangsu, China

    Software Environment:
    Websphere, Seam, JSF, Oracle, EJB, JPA, LDAP
    Development Tools:
    Eclipse + JBossTools
    
    Project Description:

        The SMPNG system is leveraged by many different aspects of JEE technologies, 
    whole JEE stack is applied in the system, to present users a modernized and clean 
    application. In order to gather and dispatch logistic transaction information from
    many branches over the world, the SMPNG system is also backed by many other message
    sources. 

        I had been working on this project in Germany with German colleagues for six weeks.
    From clients, new features were designed for handling booking and tracking operations. 
    It ought to replace the legacy SMPNG system and present business logic in more modern 
    and user-friendly style.

        As a member of the group, I had managed to communicate and collaborate with
    colleagues from different countries and with different backgrounds. From my experience, 
    I learned that some things are beyond language barrier, mainly caused by different
    mindset and culture or roles, while some communication skills would be very effective 
    solution to break down misunderstanding and deliver ideas.

        This job taught me much about those advanced tools used in enterprise development. 
    sonar for code checking, Jenkins for continuous integration, Fisheyes for refacotory, 
    all those are very useful tools for big scale software development.

    Responsibilities:
    Module Design, Programming and unit testing, collaboration between German customers 
    and other developers.

#### Projects

##### &nbsp;&nbsp; e-schenker (Jul 2010 – Jun 2011) JavaEE / [JSF](https://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html) / [Seam](http://seamframework.org)

    This project is used for DB Schenker corporation‘s logistics management. Include customer 
    information maintenance, booking management, logistics branch office maintenance, cargo 
    tracking and tracing process. It covers three types of transport mode in logistics area, they 
    are AIR, OCEAN and LAND respectively. Both customer and business clerk around the world should 
    use this system to deal with logistics.

    The system is empowered by JEE tech stack and Seam Framework. The application of JEE tech is 
    modular and multi-layered and developers are relieved from much work to deal with database or 
    web server. The new JEE 6 spec provides EJB3.1, CDI(Context Dependency Injection), RESTful API, 
    JSF etc, which are very Java-Programmer-friendly.

### Senior Java Engineer
At [ZTE Coporation](https://www.zte.com.cn/global/)
Apr 2008 – Aug 2010 . 2 yrs 5 mos at Nanjing, Jiangsu, China

    Project Description:
    
        It is often referred as NMS, and includes various function modules for different
    network managements, such as Vlan, Vpn, Switcher, Router. because target 
    Operation Systems are both of windows and Solarise (lots of NMS run on SUN server)
     , so Java and Swing UI could be the best option.
    
        JEE techniques, such as EJB, JMS, are very helpful for building highly flexible 
    System. SNMP and CLI are two mainly measures used in device operations.
    This product has been developed for couple yearsnetnumen Network Management, and it is 
    getting more capable of  management of big scale network. our target is to make it more 
    effective and robust.

    Responsibilities:
       I am working in support group that developers utilities modules relieving other
    workmates of trifles such as DB operations, UI pattern. we found that most of 
    business modules might include same functions, and we abstract those, and plan to
    build support base module, this was my challenging job.

        Lesson I learned, To develop base components used to support many other 
    concrete modules, it is important not to abuse design patterns and complicate the 
    interface. otherwise, colleagues would hate your over-engineering code. More over, 
    interfaces should be made flexible enough with OOP principles so that components 
    can be reused in various cases at minimum cost, otherwise your manager would hate 
    your code.

#### Projects

##### &nbsp;&nbsp; netnumen Network Management (May 2008 – Aug 2010) 

    This platform is developed by ZTE data network department. It consists of components
    of network interface, SNMP, telnet, Persistence layer, User Interfaces assembled in 
    a modular manner. 
    
    From technical point of view, it is empowered by combination of JEE and Swing 
    tech stack so it is portable and compatible to different databases and other 
    systems built on Java.
    
    From architecture point of view, It is designed to be modular and extensible. 
    Components for different business logics are developed easily based on platform 
    infrastructure modules, they interact via interfaces and JMS message.

    As to my work in this project, I was tasked to develop utilities and UI framework 
    to support other colleagues' development. I applied design patterns inside the 
    module for flexibility and modularity and exposed interfaces for simplicity. Users
    simply use them or inherit them. 

### Senior Java Engineer
At [AsiaInfo Linkage](http://www.lianchuang.com/)
Feb 2006 – Apr 2008 . 2 yrs 3 mos at Nanjing, Jiangsu, China

    Product Development
        I worked in LianChuang Technology that has been taken by AsiaInfo after my 
    resignation. During that period, I took part in development of SAS system. This 
    web-based system was designed to collect and analyze business operation data in 
    big scale enterprise by intercepting the network traffic in intranet without any 
    intrusion on existent systems. Further more, System admins are also able to define 
    business rules to monitor operations on critical resources, such as database and 
    hosts.

        As designer of the back end server module of the product, I studied some 
    patterns of thread use and java optimization skills. With application of those 
    in work, the product server application is able to handle great heavy workload 
    with commercial hardware.

        We also used some long-pulling technology to improve users interface so it 
    would allow system admins to monitor operations on servers immediately like real-time.

##### &nbsp;&nbsp; Securer Security Audit System (Mar 2006 – Apr 2008)

    This web-based system was designed to collect and analyse business operation data 
    in big scale enterprise by intercepting the network traffic in intranet without 
    any intrusion on existent systems. Further more, System admins are also able to 
    define business rules to monitor operations on critical resources, such as 
    database and hosts.

    The greatest challenge is performance. Therefore the architecture of this system 
    consists of:

    Network interceptors is implemented as kernel module deployed in linux kernel. 
    It can rapidly filter out great amount of network traffic based on rules configured 
    on back-end server. The amount of network data is significantly reduced as delivered
    to user layer in interceptor host.

    The back-end server receives data from several interceptors and processed for 
    further analysis and presentation. Threads backed by buffers process data step by 
    step like pipeline. Different procedures are executed by different threads for 
    better performance and modularity.

    On database level, some optimization like proper indexing and partition are applied.

### Between Jobs
May 2005 – Feb 2006 . 8 mos at Nanjing, Jiangsu, China

    I was studying and preparing for higher degree.

### Java Coder
At [Softwise](http://www.softwise.com.cn)    
Aug 2003 – Apr 2005 . 8 mos at Nanjing, Jiangsu, China

        First job as programmer, I worked in projects sourced from Japan big companies.
    Just like Chinese software industry started with outsourcing projects and grow with 
    Japanese management. I went through classic water-fall software development cycle
    and built up my basic Java skill. 

I also got to learn some advance tech (by then), 
such as [adobe coldfusion](https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-tags.html), 
[webmethod](https://www.softwareag.com/corporate/products/webmethods_integration/adapter/default.html)

