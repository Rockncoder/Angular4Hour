(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .service('dataService', [function () {

            return {
                getSessions: getSessions,
                getPresenters: getPresenters
            };

            function getSessions() {
                return [
                    {
                        "Title": "A Hands-On Introduction to Ruby",
                        "Description": "\u003cp\u003e\r\n\tThis session will begin with a brief overview of Ruby along with its history. Then we\u0026#39;ll pull out our laptops and build a basic web service.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThis session will begin with a brief overview of Ruby along with its history. Then we\u0026#39;ll pull out our laptops and build a basic web service.\u003c/p\u003e",
                        "FirstName": "Zach",
                        "LastName": "Latta",
                        "SessionID": "b4999121-c982-435d-a46d-595a9b735d47",
                        "MemberID": "fe04cb97-38f7-4702-96b0-577d5069afc1",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "ADHD \u0026 Software Engineers - A Peek Under the Covers",
                        "Description": "\u003cscript src=\"http://speakerrate.com/talks/27151/widget.js\" id=\"speakerrate-widget-27151\"\u003e\u003c/script\u003e\u003cp\u003e\r\n\t\u003cimg src=\"http://beyondadhd.com/wp-content/uploads/2013/11/Kid-hiding-in-covers2.png\" style=\"margin-left: 12px; margin-right: 12px; float: right; width: 215px; height: 166px;\" /\u003eEver wondered if you have ADHD? Even if you don\u0026#39;t you will gain from this presentation.\u003c/p\u003e\r\n\u003cul\u003e\r\n\t\u003cli\u003e\r\n\t\tMany of the individual challenges presented by ADHD are shared along with strategies 2 succeed at moving past those challenges.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tSoftware Engineering is one of the professions that individuals with ADHD gravitate towards.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tBut 80% to 90% of Adults with ADHD do not know they have it.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tDo you? Every experience of it is unique.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tWant to successfully navigate past its challenges in work and outside of work?\u003c/li\u003e\r\n\u003c/ul\u003e\r\n\u003cp\u003e\r\n\tFree tool offered for ADHD and NON-ADHD alike designed for Software Engineers to create custom effectiveness improvement plan.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tUncovering your best Strategies to Succeed, as a Software Developer, whether or not you have ADHD, is the goal of this presentation.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tMany of the individual challenges presented by ADHD, and many of the available mechanisms to overcome these and other challenges, are shared.\u003c/p\u003e",
                        "FirstName": "Steve",
                        "LastName": "Kohlenberger",
                        "SessionID": "7a4ef710-ac22-4ac8-b39a-6e1ebaf69d38",
                        "MemberID": "c99ba97d-b492-4684-94f1-8ac9934e50b4",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Advanced jQuery techniques",
                        "Description": "\u003cp\u003e\r\n\tDo you use jQuery or use jQuery right? Do you understand jQuery performance well? What about performance vs flexibility? In this code intensive talk, Chander Dhall, demystifies jQuery performance, flexibility and demonstrates some not so common techniques which will make your life as a web developer amazing.\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tDo you use jQuery or use jQuery right? Do you understand jQuery performance well? What about performance vs flexibility?\u003c/p\u003e",
                        "FirstName": "Chander",
                        "LastName": "Dhall",
                        "SessionID": "ad4d556a-7b56-44a7-8a85-6a43081eaa61",
                        "MemberID": "afc63ee4-d0fa-495b-9e9c-e017fb8d9944",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Agile for Startups: SendGrid\u0027s Agile Journey",
                        "Description": "\u003cp\u003eVictor was the first project manager and Agile coach hired at SendGrid. He was tasked with getting everyone trained in the early days (with less than 12 engineers), and he has seen many changes big and small as SendGrid has scaled staff up to over 175 employees.\r\n\u003cp\u003eVictor (a USC grad) still coaches Agile practices and trains new hires throughout the year. He also serves as a scrumaster and is active in the Agile/Lean community.\r\n\u003cp\u003eThis presentation will lay out SendGrid\u0027s history with Agile/Lean and highlight the pitfalls and successes along the way.",
                        "Brief_Description": "\u003cp\u003e\r\n\tSendGrid started in 2009 with three developers and a shared vision for making email suck less. We now deliver over 8 billion emails a month for our customers. Agile practices have helped us scale both our teams and our product. Many things we tried had ultimately failed, but we learned quickly from these mistakes to get to our current awesomeness.\u003c/p\u003e",
                        "FirstName": "Victor",
                        "LastName": "Bonacci, MBA, PMP, CSM",
                        "SessionID": "349e4111-4c95-4f25-be42-4fadcc65fe24",
                        "MemberID": "4e330ec1-850d-43d7-892e-521accbccc0a",
                        "Room": "THH 202",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "All you need to know about voice enabling web pages and mobile apps",
                        "Description": "\u003cdiv\u003e\r\n\tYou don\u0026rsquo;t have to put you ear on the ground, and still, can literally hear it coming. The broad introduction of Voice User Interfaces, allowing the interaction with mobile devices through voice, may become the biggest advancement in user interface design since the transition from text-based to graphical user interfaces.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cdiv\u003e\r\n\t\tOne of the biggest challenges with Voice User Interfaces is of course the correct and instantaneous recognition of a spoken input.\u0026nbsp;\u003c/div\u003e\r\n\t\u003cdiv\u003e\r\n\t\t\u0026nbsp;\u003c/div\u003e\r\n\t\u003cdiv\u003e\r\n\t\tA verbally responding mobile application has many obvious advantages. For instance, users don\u0026#39;t have to decipher tiny fonts on small displays, in fact, they don\u0026#39;t have to look at the display at all.\u003c/div\u003e\r\n\t\u003cdiv\u003e\r\n\t\t\u0026nbsp;\u003c/div\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tWe are taking a closer look at Android\u0026rsquo;s Speech-To-Text (STT) and Text-To-Speech (TTS) capabilities \u0026ndash; and will develop and deploy three small apps, each a little more capable, and finally walk through the steps of building a voice controlled assistant.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tFinally, we will turn our attention to the Browser and voice-enable Web applications.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cimg alt=\"\" src=\"https://lh5.ggpht.com/qKAANki2vlvzm6kXs4KWcVyxCLhBquWCMfqSccA-70545rrSfbYZ0PW6G1j4J6VwCjU=h900-rw\" style=\"width: 253px; height: 450px;\" /\u003e\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThe Voice User Interfaces, allowing the interaction with mobile devices through voice, may become the biggest advancement in user interface design since the transition to graphical user interfaces. We will talk about Android\u0026rsquo;s Speech-To-Text and Text-To-Speech capabilities, before turning our attention to the Browser, to voice-enable Web applications.\u003c/p\u003e",
                        "FirstName": "Wolf",
                        "LastName": "Paulus",
                        "SessionID": "0f86df1d-9a88-4233-91d1-02135c58921a",
                        "MemberID": "1536b3d7-95a8-48ba-9081-7b29ed5776a9",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "An intro to Unity for creating killer 3D Games",
                        "Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(0, 0, 0); font-family: Calibri; font-size: 14px; line-height: 20px;\"\u003eUnity is the premier advanced platform to develop stunning 2D and 3D applications for all major platforms. Microsoft and Unity have partnered together to provide first class support in the Unity platform for Windows 8 and Windows Phone applications for free to the developer, rounding out support for every major platform. Come learn about the basics of Unity, the UI, assets, code, ways to develop, and some simple but powerful game techniques to get up and running fast with Unity.\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tUnity is the premier advanced platform to develop stunning 2D and 3D applications for all major platforms. Come learn about the basics of Unity, the UI, assets, code, ways to develop, and some simple but powerful game techniques to get up and running fast with Unity.\u003c/p\u003e",
                        "FirstName": "Adam",
                        "LastName": "Tuliper",
                        "SessionID": "32877d33-7579-4948-8a63-04ab2bb579b2",
                        "MemberID": "258ad583-42f1-41d7-ba07-8faef429156a",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "An Introduction to Codeception",
                        "Description": "\u003cp\u003e\r\n\tBest Practices for Setting up Codeception. Everyone from developers to QA understand the need for testing.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session, we will break down the use of Codeception for Automated PHP testing. \u0026nbsp;Not only will we be writing basic tests, but we will break down useful approaches to setting up and standardizing the test environment.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tFunctional Testing for PHP using Codeception\u003c/p\u003e",
                        "FirstName": "Jonathan",
                        "LastName": "Lau",
                        "SessionID": "74502049-2a9a-4014-9776-150787780cf7",
                        "MemberID": "e2734d99-eb90-4757-ac77-4cca1c44a09f",
                        "Room": "VHE 206",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "An Introduction to CoffeeScript",
                        "Description": "\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\tIn this presentation we\u0026#39;ll introduce CoffeeScript, why you might be interested in using it, provide code examples, etc.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\t\u003ca _mce_href=\"http://coffeescript.org/\" href=\"http://coffeescript.org/\" style=\"display: inline; font-family: inherit; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003eCoffeeScript\u003c/a\u003e\u0026nbsp;is a little language that compiles into JavaScript. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\tFor a quick overview of CoffeeScript check out Aseem Kishore\u0026#39;s \u0026quot;Introduction to CoffeeScript\u0026quot; slides\u0026nbsp;\u003ca _mce_href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" style=\"display: inline; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003ehere\u003c/a\u003e\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\t\u003cstrong\u003eAbout the Speaker:\u003c/strong\u003e\u003cbr /\u003e\r\n\tDan Yoder is the \u0026quot;Chief Panda\u0026quot; at PandaStrike.com, a Node.js consulting company in Los Angeles, and a co-organizer of the \u003ca _mce_href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" href=\"http://coffeescript.la\" style=\"display: inline; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003eLos Angeles CoffeeScript\u003c/a\u003e\u0026nbsp;meetup. For the past few years he has\u0026nbsp;focused on rich client, high-performance Web and mobile experiences and lightweight solutions for big data using CoffeeScript, Node.js, and a stack of innovative open source technologies.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(85, 85, 85); font-family: verdana, Arial, sans-serif; line-height: 18px;\"\u003eIn this presentation we\u0026#39;ll introduce CoffeeScript, why you might be interested in using it, provide code examples, etc.\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Dan",
                        "LastName": "Yoder",
                        "SessionID": "ae06efa2-a12e-4ae9-9f19-11d39b11e325",
                        "MemberID": "87c28bc7-b99d-49b3-b2e3-6a45d9bef62d",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "An Introduction to CoffeeScript",
                        "Description": "\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\tIn this presentation we\u0026#39;ll introduce CoffeeScript, why you might be interested in using it, provide code examples, etc.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\t\u003ca _mce_href=\"http://coffeescript.org/\" href=\"http://coffeescript.org/\" style=\"display: inline; font-family: inherit; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003eCoffeeScript\u003c/a\u003e\u0026nbsp;is a little language that compiles into JavaScript. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\tFor a quick overview of CoffeeScript check out Aseem Kishore\u0026#39;s \u0026quot;Introduction to CoffeeScript\u0026quot; slides\u0026nbsp;\u003ca _mce_href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" style=\"display: inline; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003ehere\u003c/a\u003e\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); line-height: 18px;\"\u003e\r\n\t\u003cstrong\u003eAbout the Speaker:\u003c/strong\u003e\u003cbr /\u003e\r\n\tDan Yoder is the \u0026quot;Chief Panda\u0026quot; at PandaStrike.com, a Node.js consulting company in Los Angeles, and a co-organizer of the \u003ca _mce_href=\"http://aseemk.com/talks/intro-to-coffeescript#/\" href=\"http://coffeescript.la\" style=\"display: inline; cursor: pointer; color: rgb(42, 155, 199); text-decoration: none;\"\u003eLos Angeles CoffeeScript\u003c/a\u003e\u0026nbsp;meetup. For the past few years he has\u0026nbsp;focused on rich client, high-performance Web and mobile experiences and lightweight solutions for big data using CoffeeScript, Node.js, and a stack of innovative open source technologies.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(85, 85, 85); font-family: verdana, Arial, sans-serif; line-height: 18px;\"\u003eIn this presentation we\u0026#39;ll introduce CoffeeScript, why you might be interested in using it, provide code examples, etc.\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Lance",
                        "LastName": "Lakey",
                        "SessionID": "ae06efa2-a12e-4ae9-9f19-11d39b11e325",
                        "MemberID": "2e958300-ece5-47d8-bd56-e92eb79bf31f",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "An Introduction to KnockoutJS",
                        "Description": "\u003cp\u003e\r\n\tKnockout JS is a JavaScript implementation of the MVVM pattern established by Microsoft in there WPF and Silverlight XAML application frameworks.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session we will take some time and learn how KnockoutJS works and see why it\u0026rsquo;s an incredibly powerful JavaScript library and design pattern.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tKnockout JS is a JavaScript implementation of the MVVM pattern established by Microsoft in there WPF and Silverlight XAML application frameworks.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session we will take some time and learn how KnockoutJS works and see why it\u0026rsquo;s an incredibly powerful JavaScript library and design pattern.\u003c/p\u003e",
                        "FirstName": "Daniel",
                        "LastName": "Lewis",
                        "SessionID": "4597597b-45b9-4991-a136-9d77d9fc520d",
                        "MemberID": "5af322ad-bb66-4f5c-835c-227a4c3d1a7c",
                        "Room": "THH 202",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Angular JS with ASP.NET MVC and WebAPI.",
                        "Description": "\u003cp\u003e\r\n\tIn this talk we will look at Angular JS, a front end javascript framework and see how we can integrate angular into an ASP.NET MVC app. We\u0026rsquo;ll look at the various features of angular including support for data binding, client side routing, services, filters, dependency injection and testing. We will use WebAPI to persist data back to the server.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this talk we will look at Angular JS, a front end javascript framework and see how we can integrate angular into an ASP.NET MVC app. We\u0026rsquo;ll look at the various features of angular including support for data binding, client side routing, services, filters, dependency injection and testing. We will use WebAPI to persist data back to the server.\u003c/p\u003e",
                        "FirstName": "Hattan",
                        "LastName": "Shobokshi",
                        "SessionID": "68315767-acbb-4d42-9f63-3ba613216116",
                        "MemberID": "0826193e-c1fe-463c-a1ec-a21d5fd60936",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "AngularJS Best Practices",
                        "Description": "Come learn the top AngularJS tips to improve your workflow and enhance your AngularJS experience. John will talk about \u0027Best Practices\u0027, debatable approaches, and code smells that he\u0027s found from teaching and training on AngularJS since it hit 1.0.",
                        "Brief_Description": "\u003cp\u003e\r\n\tCome learn the top AngularJS tips to improve your workflow and enhance your AngularJS experience. John will talk about Best Practices, debatable approaches, and code smells that he has found from teaching and training on AngularJS since it hit 1.0.\u003c/p\u003e",
                        "FirstName": "John",
                        "LastName": "Lindquist",
                        "SessionID": "2d95e4d9-4b3b-4f8b-aa4b-00852d18ab45",
                        "MemberID": "5beca451-5bdb-42ba-84a7-b23792b66d43",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "Architecting Applications for Multiple User Interfaces",
                        "Description": "\u003cp\u003e\r\n \u003cspan style=\"font-family: \u0026quot;Arial\u0026quot;,\u0026quot;sans-serif\u0026quot;; font-size: 12pt; mso-bidi-font-size: 10.0pt; mso-fareast-font-family: \u0026quot;Times New Roman\u0026quot;; mso-bidi-font-family: \u0026quot;Times New Roman\u0026quot;; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\"\u003e\u003cfont color=\"#000000\"\u003eThe techniques for building applications have changed dramatically in the last few years. Gone are the days of single-tier, battle-ship gray, boring user interfaces. Users demand that your applications (or portions) run on more than one device. This session will take you on a tour of how you should be architecting your application by breaking it up into services. You will learn how to create your business rules and data layer as a service. This seminar will assume you have some knowledge of .NET but have been developing applications the old way and you are now looking to see how to use WCF and the Model-View-View-Model (MVVM) design pattern to create applications that can be run one more than one user interface platform. This session has many demonstrations and you will be led step-by-step through the code. You will walk away with a sample set of services that run on Silverlight, Windows Forms, WPF, Windows Phone and ASP.NET.\u003c/font\u003e\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Learn techniques to build reusable class libraries that can be used in WPF, ASP.NET, Silverlight, Windows Phone and Windows Store.\u003c/p\u003e",
                        "FirstName": "Paul",
                        "LastName": "Sheriff",
                        "SessionID": "a8853d9c-ba3d-46c8-8b22-630dec9470f6",
                        "MemberID": "a446c7d7-75ac-4807-a591-d1dba16c1956",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Augmented Reality Mobile App Development",
                        "Description": "This talk is aimed at intermediate level developers who wish to create augmented reality mobile applications using JavaScript. We will assume previous experience in creating hybrid mobile application development. We will cover augmented reality concepts, relevant HTML5 web standards and create a Web application and a Mobile App. The Mobile App version will extend the web version by taking advantage of smartphone features to create a genuine augmented reality experience.(All coding will be done in JavaScript and HTML using free and open source software)",
                        "Brief_Description": "This talk is aimed at intermediate level developers who wish to create augmented reality mobile applications using JavaScript. We will cover augmented reality concepts, relevant HTML5 web standards and create a Web application and a Mobile App.)",
                        "FirstName": "George",
                        "LastName": "McKinney",
                        "SessionID": "59f7df42-8916-402a-9675-813645ec3f22",
                        "MemberID": "68f6a98c-60fd-46b2-9b0d-0d0c8f408d5d",
                        "Room": "VHE 210",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Backyard Aquaponics",
                        "Description": "\u003cp\u003e\r\n\tWant to grow your own food at home? In this session I\u0026#39;ll show you how to set up your own backyard aquaponics system. Learn how to maintain fish, and plants in a symbiotic relationship to help you grow food fast and nutritious.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWant to grow your own food at home? In this session I\u0026#39;ll show you how to set up your own backyard aquaponics system.\u003c/p\u003e",
                        "FirstName": "Ben",
                        "LastName": "Dornis",
                        "SessionID": "29cdc4fc-0033-443e-a9ed-5fae1d53b8b5",
                        "MemberID": "2453debd-fc7e-4bb5-b657-b0bd31041e95",
                        "Room": "VHE 206",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Beginning HTML5 Mobile Game Programming",
                        "Description": "\u003cdiv\u003e\r\n\tHTML5 is the hottest buzzword on the web. It gives a lot of new features to websites, so many in fact that it makes it possible to create a fairly decent game in the browser without using a proprietary solution like Flash. Now, we aren\u0026#39;t talking about a sequel to Call of Duty, but instead a casual game more in the vein of Bejeweled. When you combine HTML5 with jQuery Mobile you have a great platform for making games which can be played on all of the latest and greatest mobile devices.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tIn this session, I will present a simple HTML5 game engine, explain the various pieces of its architecture, and most of all explain how you can further expand it. All of the source code and slides shown will be available for download after the session.\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tGames are fun and HTML5 includes lots of features to make it easier than ever to build a cool game. And with smartphones in nearly everyones pocket, there has never been a better time to create your own game.\u003c/div\u003e",
                        "FirstName": "Troy",
                        "LastName": "Miles",
                        "SessionID": "a43a167e-bc54-43d2-baba-8f47cfa29cb0",
                        "MemberID": "d05cc68f-3107-42a6-8e33-4d0a7b1543e4",
                        "Room": "SLH 100",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Best Practices for Agile Work Management",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; Waterfall is Dead: Move On! In today\u0026amp;rsquo;s world, the success of your career is hinged on the ability to adapt to your environment. What is the \u0026amp;lsquo;Agile Manifesto\u0026amp;rsquo; and how should it guide my projects? The process of developing software has evolved over the years. Learn how sprints, time boxing and stand ups can improve quality and productivity.\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn today\u0026rsquo;s world, the success of your career is hinged on the ability to adapt to your environment. The process of developing software has evolved over the years. Learn new techniques, such as sprints, time boxing and stand ups can improve quality and productivity.\u003c/p\u003e",
                        "FirstName": "Michael",
                        "LastName": "Krasowski",
                        "SessionID": "e9430bdc-ad6e-41ef-a88c-e6d79d593c76",
                        "MemberID": "c312a2d5-93c7-439e-a484-fbdece8f84a4",
                        "Room": "OHE 122",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Best Practices for Estimating Projects",
                        "Description": "\u003cp\u003e\r\n\tAre you afraid of making estimates? You are not alone! Do you know why making quality estimates AND tracking actuals is so important? Can you \u003cem\u003ereally\u003c/em\u003e estimate how long a football game will be? Learn the importance of accurate estimating and how that skill will help you define and manage your customer\u0026rsquo;s expectations. Discover the difference between \u0026lsquo;ideal time\u0026rsquo; and \u0026lsquo;elapsed time\u0026rsquo; and why your estimates need to encompass both. Join others in learning the anatomy of an estimate and lean techniques to make your life easier. Come learn some great tips you can begin using your first day back on the job.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tTaking the Guess Work out of Estimating: Are you afraid of making estimates? You are not alone! Do you know why making quality estimates AND tracking actuals is so important? Can you really estimate how long a football game will be?\u003c/p\u003e",
                        "FirstName": "Michael",
                        "LastName": "Krasowski",
                        "SessionID": "dd5ae448-9829-4327-ac99-1d458ff961a6",
                        "MemberID": "c312a2d5-93c7-439e-a484-fbdece8f84a4",
                        "Room": "OHE 122",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Best Practices for Project Management",
                        "Description": "\u003cp\u003e\r\n\tAre you having difficulty managing your projects? Are you about to enter the uncharted territory of project management? Do you know how to communicate effectively to your customer, teammates, and your management? Come early, sit close and get some common sense, experienced based tips and pointers on how to improve your soft skills. \u0026nbsp;Discover how to find the \u0026lsquo;right\u0026rsquo; people for your team. Learn the practical elements of working with customers, people, technology, process, and \u0026ldquo;connecting\u0026rdquo; them successfully to be more effective at your job. You will leave with demonstrable actions that you can apply at your next day back at work.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t24 Things You Need to Know to Survive any Project: Are you having difficulty managing your projects? Are you about to enter the uncharted territory of project management? Do you know how to communicate effectively to your customer, teammates, and your management? Come early, sit close....\u003c/p\u003e",
                        "FirstName": "Michael",
                        "LastName": "Krasowski",
                        "SessionID": "51f5e91e-adf2-451f-b941-8d283e9de0dd",
                        "MemberID": "c312a2d5-93c7-439e-a484-fbdece8f84a4",
                        "Room": "OHE 122",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "Beyond the Matrix - Getting to the Next Renaissance",
                        "Description": "\u003cp\u003e\r\n\tWe\u0026rsquo;ve all seen \u0026ldquo;The Matrix\u0026rdquo;, right?\u0026nbsp; The story of artificially intelligent machines that harvest human energy by intercepting human sensory perception and replacing it with their architected artificial reality (The Matrix) \u0026hellip;\u003c/p\u003e\r\n\u003cblockquote\u003e\r\n\t\u003cp\u003e\r\n\t\t\u003ccr\u003e\u003ccr\u003e\u0026quot;Let me tell you why you\u0026#39;re here. You\u0026#39;re here because you know something. What you know you can\u0026#39;t explain, but you feel it. You\u0026#39;ve felt it your entire life, that there\u0026#39;s something wrong with the world. You don\u0026#39;t know what it is, but it\u0026#39;s there, like a splinter in your mind, driving you mad. It is this feeling that has brought you to me. Do you know what I\u0026#39;m talking about?\u0026quot; ~Morpheus -The Matrix\u003c/cr\u003e\u003c/cr\u003e\u003c/p\u003e\r\n\u003c/blockquote\u003e\r\n\u003cp\u003e\r\n\tMany believe that our present-day perceptions are shaped by a \u0026ldquo;machine\u0026rdquo; of sorts\u0026hellip; current power and control structures\u0026hellip; but the masses are on giant hamster wheels within its carefully crafted constructs and too busy to notice.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tMovements for peace, safe food, healthy environment, and more suggest that many are\u0026nbsp;feeling the splinter in their minds and are now seeking to take and share the red pill of truth. \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIs Globalization really a great thing or is it just a method by the global elite (who control the shipping lanes) to keep the masses dependent?\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThe presenter suggests that solutions exist to enable abundance for all in this world. \u0026nbsp;Energy Advancement (Cold Fusion, Magnetic Generators, Water-powered engines, Plasmic Engines) would enable local cheap clean energy production which would enable local water and food production, local clean manufacturing, near-free transportation anywhere in the world. \u0026nbsp;Think regional conflict might dissipate when people around the world are living in abundance?\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThere are advancements in our understanding of mind and consciousness that are also becoming mainstream which are helping make the leap to a renaissance.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIf you are one of the 99% who is seeking perspective that isn\u0026#39;t shaped by the 1% that is looking to keep the status quo, come join us for this presentation.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tSo are we living the Next Renaissance already or is it sitting there just beyond The Matrix?\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tFollow the presenter\u0026#39;s evolving world view on Facebook \u0026nbsp;at \u003ca href=\"http://www.facebook.com/art.villa\"\u003ewww.facebook.com/art.villa\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tA good profile with some informative/empowering links can also be found at\u0026nbsp;\u003ca href=\"http://art.thenextrenaissance.com/\"\u003ehttp://Art.TheNextRenaissance.com\u003c/a\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u0026quot;Let me tell you why you\u0026#39;re here. You\u0026#39;re here because you know something. What you know you can\u0026#39;t explain, but you feel it. You\u0026#39;ve felt it your entire life, that there\u0026#39;s something wrong with the world. Do you know what I\u0026#39;m talking about?\u0026quot; ~Morpheus -The Matrix\u003c/p\u003e",
                        "FirstName": "Art",
                        "LastName": "Villa",
                        "SessionID": "5042c143-5880-4cd9-a86d-a212f26e51ca",
                        "MemberID": "a8f5c70b-27b9-40e3-825a-1a92acf824f1",
                        "Room": "ZHS 360",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Building for the real-time web with Node.js",
                        "Description": "\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\tAs websites become more interactive, the demand for real-time updates increases. Learn why Node.js is a good fit for the real-time web and how easy it is to get started with it.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\tIn this talk, Tim will discuss the following topics:\u003c/p\u003e\r\n\u003cul style=\"padding-right: 0px; padding-left: 2.75em; margin: 0px 0px 12px; font-family: verdana, Arial, sans-serif; list-style-position: outside; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003cspan style=\"font-family: inherit;\"\u003eWhat is Node.js and what problems does it solve?\u003c/span\u003e\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003cspan style=\"font-family: inherit;\"\u003eWhy Javascript?\u003c/span\u003e\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003cspan style=\"font-family: inherit;\"\u003ePerformance and scalability with Node.js\u003c/span\u003e\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003cspan style=\"font-family: inherit;\"\u003eHosting and deploying Node.js applications with Azure\u003c/span\u003e\u003c/li\u003e\r\n\u003c/ul\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\t\u003cstrong style=\"display: inline; font-family: inherit;\"\u003eAbout the Speaker:\u003c/strong\u003e\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\tTimothy Strimple has worked with and for startups for over ten years as a Software Developer, and later as the Director of Software Development, managing teams of developers. Tim has a broad background in many technologies and languages from Apache \u0026amp; PHP to IIS and ASP.NET\u0026nbsp;to Node.JS, as well as both front end and back end web development.\u003c/p\u003e\r\n\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\t\u003cspan style=\"font-family: inherit;\"\u003eIn 2012, Tim joined Microsoft as their Startup Evangelist for SoCal. In this role, Tim is a technical resource for startups as well as a liaison between Microsoft and the startup community.\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp style=\"margin: 0px 0px 12px; padding: 0px; font-family: verdana, Arial, sans-serif; color: rgb(85, 85, 85); font-size: 15px; line-height: 21px;\"\u003e\r\n\tAs websites become more interactive, the demand for real-time updates increases. Learn why Node.js is a good fit for the real-time web and how easy it is to get started with it.\u003c/p\u003e",
                        "FirstName": "Timothy",
                        "LastName": "Strimple",
                        "SessionID": "1c9bbe2e-6e40-4e6c-8167-9913df72fe2a",
                        "MemberID": "3be2a6ae-f037-4a73-98ff-0fc09ecb7bb9",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Building Mobile Apps with PhoneGap and Backbone",
                        "Description": "\u003cdiv\u003e\r\n\tMobile is the future, but it is a lot of work to support all of the different device architectures out there. Is there an easier way? YES! PhoneGap, when combined with Backbone, it becomes a cool way to build apps which can run on nearly every popular mobile platform.\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tHTML5 at one point held the promise of being the unifying platform for desktop and mobile devices. Then big name companies seem to turn their backs on the platform in droves. But don\u0026#39;t don\u0026#39;t despair, HTML5 isn\u0026#39;t dead, in fact it is still a great choice for many mobile applications.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tIn this session, we will build a simple to understand but easy to enhance mobile app. We will use the latest and greatest version of PhoneGap, 3.0 for cross-platformness. To it we will add the open source MV* framework, Backbone, which will help bring order to the normal chaos of JavaScript development.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tMobile is the future, but it is a lot of work to support all of the different device architectures out there. Is there an easier way? YES! PhoneGap, when combined with Backbone, it becomes a cool way to build apps which can run on nearly every popular mobile platform.\u0026nbsp;\u003c/div\u003e",
                        "FirstName": "Troy",
                        "LastName": "Miles",
                        "SessionID": "5a18cf28-d443-4e98-82ab-d6c77a473935",
                        "MemberID": "d05cc68f-3107-42a6-8e33-4d0a7b1543e4",
                        "Room": "ZHS 159",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Computing with Network/Graph Data",
                        "Description": "\u003cp\u003e\r\n\tData is now structured with interrelationships as a network or graph: social networks, big data, machine learning, knowledge, dependencies, finance, communications, ...\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tHow are others using this data and how can we structure and use it?\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003cbr /\u003e\r\n\tWe introduce network/graphical data, its features, how to represent it, and how to compute on it.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tAs an example that you can use in your own software, we will develop a critical, but simple and practical algorithm that calculates a best path over relationships (Dijkstra\u0026#39;s shortest path algorithm).\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tHow to use data structured with interrelationships: networks and graphs in social networks, business rules, knowledge, machine learning, etc. We introduce its structures, how to represent it, and how to compute on it.\u0026nbsp; We also develop a simple, practical, important algorithm that calculates the best path over relationships, as code that you can use in your software.\u003c/p\u003e",
                        "FirstName": "Steve",
                        "LastName": "Bearman",
                        "SessionID": "1bb68780-d8c5-4041-a234-f8a71921b6bc",
                        "MemberID": "6672ee74-ee34-48a2-b309-d4fcb68f5759",
                        "Room": "SLH 100",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Computing with Network/Graph Data",
                        "Description": "\u003cp\u003e\r\n\tData is now structured with interrelationships as a network or graph: social networks, big data, machine learning, knowledge, dependencies, finance, communications, ...\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tHow are others using this data and how can we structure and use it?\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003cbr /\u003e\r\n\tWe introduce network/graphical data, its features, how to represent it, and how to compute on it.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tAs an example that you can use in your own software, we will develop a critical, but simple and practical algorithm that calculates a best path over relationships (Dijkstra\u0026#39;s shortest path algorithm).\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tHow to use data structured with interrelationships: networks and graphs in social networks, business rules, knowledge, machine learning, etc. We introduce its structures, how to represent it, and how to compute on it.\u0026nbsp; We also develop a simple, practical, important algorithm that calculates the best path over relationships, as code that you can use in your software.\u003c/p\u003e",
                        "FirstName": "Nuri",
                        "LastName": "Halperin",
                        "SessionID": "1bb68780-d8c5-4041-a234-f8a71921b6bc",
                        "MemberID": "b0f28df5-d0f9-462a-b143-d9ab3d1fdd22",
                        "Room": "SLH 100",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Creating Collections of Entity Classes",
                        "Description": "\u003cp\u003e\r\n \u0026lt;p\u0026gt; \u0026amp;nbsp;You know should be creating collections of objects instead of using a Data Reader, a DataSet or a DataTable in your applications. The reasons for using collections of objects are many. You get strong typing, IntelliSense, compile-time errors instead of runtime and many other reasons. You can use LINQ to SQL or the Entity Framework to generate code that creates these collections of objects for you. However, Microsoft loves to abandon technologies every other year, so if you know how to build your own object collections using technology that is tried and true, then you are not relying on Microsoft staying consistent. Using ADO.NET for data access and building classes with properties and methods has not changed since .NET 1.0. In this seminar you will learn to use a DataTable to fill a collection of objects. You will then see how to use a DataReader to fill the same collection of objects. You will also see how to use LINQ to iterate over a DataTable to build your entity collection. Finally, you will learn the use of nullable and non-nullable data types and finally see how to use reflection to fill your collections.\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Learn to use collections of Entity classes for all your database access.\u003c/p\u003e",
                        "FirstName": "Paul",
                        "LastName": "Sheriff",
                        "SessionID": "86e8b06d-8988-48a9-a0ce-f39b6ebfaf7b",
                        "MemberID": "a446c7d7-75ac-4807-a591-d1dba16c1956",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Creating HTML5 and AngularJs Websites Using Visual Studio LightSwitch",
                        "Description": "\u003cp\u003e\r\n \u003cimg alt=\"\" src=\"http://lightswitchhelpwebsite.com/Portals/0/Blog/Files/1/2220/Windows-Live-Writer-JQuery-Mobile-Tree-Using-Collapsible-Sec_584F-LightSwitchTree_3.png\" /\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n Built into Visual Studio 2013 is an incredibly easy to use JavaScript databinding framework that allows you to build HTML5 SPA applications.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n You can also speed up development of your\u0026nbsp;AngularJs applications by using Visual Studio LightSwitch to code your model. To complete your MVC application, you only need to create the WebAPI controllers\u0026nbsp;and the views.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n This session is sponsored by \u003cstrong\u003eComponentOne \u003c/strong\u003e\u003ca href=\"http://ComponentOne.com\"\u003ehttp://ComponentOne.com\u003c/a\u003e and their \u003ca href=\"http://www.componentone.com/SuperProducts/LightSwitchHTML/\"\u003eStudio for LightSwitch HTML\u003c/a\u003e will also be demonstrated.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n Covered in this session:\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/1212/Visual-Studio-LightSwitch-2013-ndash-Hello-World.aspx\" id=\"dnn_ctr382_MainView_ViewBlog_lstBlogView_lnkEntry_2\" rel=\"bookmark\"\u003eVisual Studio LightSwitch 2013\u0026ndash;Hello World!\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/2217/Top-10-things-to-know-about-the-LightSwitch-HTML-Client.aspx\"\u003e\u003cspan style=\"text-decoration: underline;\"\u003eTop 10 things to know about the LightSwitch HTML Client\u003c/span\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/2220/JQuery-Mobile-Tree-Using-Collapsible-Sections-and-Dynamic-Views-in-LightSwitch.aspx\" id=\"dnn_ctr382_MainView_ViewBlog_lstBlogView_lnkEntry_4\" rel=\"bookmark\"\u003eJQuery Mobile Tree Using Collapsible Sections and Dynamic Views in LightSwitch\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca class=\"Blog_RecentEntries_Title\" href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/2230/Creating-an-AngularJS-CRUD-Application-Using-Visual-Studio-LightSwitch.aspx\"\u003eCreating an AngularJS CRUD Application Using Visual Studio LightSwitch\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/2231/Using-JayData-to-Consume-the-Visual-Studio-LightSwitch-OData-Business-Layer-in-a-AngularJs-CRUD-Application.aspx\" id=\"dnn_ctr382_MainView_ViewBlog_lstBlogView_lnkEntry_0\" rel=\"bookmark\"\u003eUsing JayData to Consume the Visual Studio LightSwitch OData Business Layer in a AngularJs CRUD Application\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n Presenter:\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003cstrong\u003eMichael Washington\u003c/strong\u003e is a ASP.NET, C# programmer. He has extensive knowledge in process improvement, billing systems, and student information systems. He is a Microsoft MVP. He is the founder of the LightSwitchHelpWebsite.com. He has a son, Zachary and resides in Los Angeles with his wife Valerie.\u003c/p\u003e\r\n\u003cp\u003e\r\n He is the author of:\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca class=\"title\" href=\"http://www.amazon.com/Creating-Pages-LightSwitch-Client-ebook/dp/B00DX6SGUY/ref=la_B005DONI3O_1_1?s=books\u0026amp;ie=UTF8\u0026amp;qid=1380472031\u0026amp;sr=1-1\"\u003e\u003cfont color=\"#004b91\"\u003eCreating Web Pages Using the LightSwitch HTML Client: In Visual Studio 2012\u003c/font\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca class=\"title\" href=\"http://www.amazon.com/Creating-LightSwitch-Controls-Intermediate-ebook/dp/B005D5J2WO/ref=la_B005DONI3O_1_2?s=books\u0026amp;ie=UTF8\u0026amp;qid=1380472031\u0026amp;sr=1-2\"\u003e\u003cfont color=\"#004b91\"\u003eCreating Visual Studio LightSwitch Custom Controls (Beginner to Intermediate)\u003c/font\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n \u003ca class=\"title\" href=\"http://www.amazon.com/OData-Visual-Studio-LightSwitch-ebook/dp/B00889ESSK/ref=la_B005DONI3O_1_3?s=books\u0026amp;ie=UTF8\u0026amp;qid=1380472031\u0026amp;sr=1-3\"\u003e\u003cfont color=\"#004b91\"\u003eOData And Visual Studio LightSwitch Using ASP.NET / Windows Phone / jQuery / datajs / Knockout (Volume 1)\u003c/font\u003e\u003c/a\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Built into Visual Studio 2013 is an incredibly easy to use JavaScript databinding framework that allows you to build HTML5 applications. You can also speed up development of your ASP.NET and AngularJs applications by using Visual Studio LightSwitch to code your model.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Michael",
                        "LastName": "Washington",
                        "SessionID": "e4dc98b3-985c-454a-aa4b-af118001975d",
                        "MemberID": "3b7f6a92-3417-43e0-93a4-5f4e02fd9d99",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Creating Windows 8, Windows Phone and Cross Platform Games with Construct 2",
                        "Description": "\u003cp\u003e\r\n\tThere are a lot of different gaming frameworks out there, but one of my favorite is Construct 2 from scirra.com. \u0026nbsp;Come see how easy it is to build games for Windows 8, Windows Phone, and just about any platform with this awesome tool!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThere are a lot of different gaming frameworks out there, but one of my favorite is Construct 2 from scirra.com. \u0026nbsp;Come see how easy it is to build games for Windows 8, Windows Phone, and just about any platform with this awesome tool!\u003c/p\u003e",
                        "FirstName": "Bret",
                        "LastName": "Stateham",
                        "SessionID": "16cde193-6277-41d8-941a-29c4d70ea525",
                        "MemberID": "b0a8ffd5-38c9-41d8-bdb0-f63033a8b242",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Deprecating the password: An alternative approach to authentication using email only",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; We should be evaluating whether the traditional username and password is the best form of authentication. I think there is a better way. I\u0026amp;amp;#39;m calling it \u0026amp;amp;#39;email only authentication\u0026amp;amp;#39;. It\u0026amp;amp;#39;s inspired by 2 part authentication, is much simpler, and you can implement it in under 30 minutes.\u0026amp;amp;nbsp;\u0026lt;/p\u0026gt; \u0026lt;p\u0026gt; Come see a live coded demo of how to add this to your next web application. I\u0026amp;amp;#39;ll discuss the benefits and drawbacks as well.\u0026amp;amp;nbsp;\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWe should be evaluating whether the traditional username and password is the best form of authentication. I think I\u0026#39;ve found a better way.\u003c/p\u003e",
                        "FirstName": "Scott",
                        "LastName": "Motte",
                        "SessionID": "500d1929-001e-4355-be4b-b36f18c78be5",
                        "MemberID": "8046e4f6-e2e4-46c3-8820-67875ff0541d",
                        "Room": "VHE 210",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Do LESS!",
                        "Description": "\u003cp\u003e\r\n\tIf you are serious about front-end development and your time is important to you then you must do LESS. LESS is a CSS framework that enables writing CSS stylesheets with much less code by way of variables, mixins, and other LESS features that promote reuse and eliminate style rule repetition inherent in static CSS stylesheets. Such streamlined code is easier to understand, modify, and maintain. In this workshop you will learn core features of LESS. At the end of the workshop you should be able to substantially reduce the amount of code needed for your CSS stylesheets, use LESS with media queries, and know how to compile and then apply LESS files to your website.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tPresenter is a programmer who must make sense of CSS stylesheets prepared by designers or other front-end developers. LESS is the answer for me and to all programatically inclined to introduce better organization and logic into the styling.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003ciframe src=\"http://www.slideshare.net/slideshow/embed_code/28258989\" width=\"476\" height=\"400\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"\u003e\u003c/iframe\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIf you are serious about front-end development and your time is important to you then you must do LESS. LESS is a CSS framework that enables writing CSS stylesheets with much less code by way of variables, mixins, and other LESS features that promote reuse and eliminate style rule repetition inherent in static CSS stylesheets.\u003c/p\u003e",
                        "FirstName": "Sven",
                        "LastName": "Homan",
                        "SessionID": "1698ee7f-2776-4d24-b380-47f1f72f8039",
                        "MemberID": "3df639b7-da84-4377-85cf-a7de4597ea01",
                        "Room": "ZHS 159",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Easy/Robust/True cross-browser web testing with TestCafé",
                        "Description": "Come check out how you can run functional tests in any browser that supports HTML5. Run tests on remote computers, mobile devices, multiple browsers, multiple machines in parallel, and even tests in the background. And, you can write the tests in JavaScript. It even runs on different operating systems: Windows, Linux, or Mac machines.",
                        "Brief_Description": "\u003cp\u003e\r\n\tCome check out how you can run functional tests in any browser that supports HTML5. Run tests on remote computers, mobile devices, multiple browsers...\u003c/p\u003e",
                        "FirstName": "Mehul",
                        "LastName": "Harry",
                        "SessionID": "8dc78896-4eaa-4edf-87cb-a33d96978e41",
                        "MemberID": "a8742292-35b6-4c0d-83e8-aec6cd1deaa2",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "Fast \u0026 Furious iOS and Windows Phone development with Azure Mobile Services",
                        "Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(0, 0, 0); font-family: Calibri; font-size: 14px; line-height: 20px; \"\u003eTime to market is critical in mobile application development, and new cloud-based technologies are here to help you get your apps out the door faster. By abstracting back-end operations and using a powerful SDK, Windows Azure Mobile Services allows you to focus on creating beautiful native User Interfaces on the web (HTML 5), iOS, Android, Windows Phone and Windows 8 devices and coding custom logic for these platforms. In this presentation, Eugene Chuvyrov will demonstrate how a single backend hosted on Windows Azure Mobile Services powers both iOS and Windows Phone devices. Taking advantage of the data from Dun \u0026amp; Bradstreet Developer Challenge, he will show a mobile CRM system that they created for these platforms.\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tLearn about Azure Mobile Services, a Backend-as-a-Service offering from Microsoft that allows you to build mobile applications quickly by not worrying about the back-end plumbing.\u003c/p\u003e",
                        "FirstName": "Eugene",
                        "LastName": "Chuvyrov",
                        "SessionID": "087c0f5b-634c-4652-83a3-28e5cea67320",
                        "MemberID": "107345f4-0230-401e-aca8-9ceb5bdd3385",
                        "Room": "ZHS 352",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Finding, Fixing, and Preventing Security Issues in Ruby on Rails Applications",
                        "Description": "\u003cp\u003e\r\n\tUsing Brakeman (a static analysis security tool) can help find potential security vulnerabilities in Ruby on Rails, but it still requires a human to investigate the warnings. Once a warning is determined to be a real issue, fixing the issue can be straight-forward and obvious, or it can be completely unclear what should be done to rectify the situation.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session we will go through running Brakeman, interpreting the results, investigating warnings, and fixing them. Then we\u0026#39;ll discuss how to use Brakeman with continuous integration to prevent these types of vulnerabilites from reaching production.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tSecurity is sometimes seen as a dark art, or something best left to security teams. Reports from security tools (and security people) are often obtuse and confusing. In this session we will dig into tracking down and fixing security problems in Rails applications using the Brakeman static analysis tool, then discuss how to prevent these problems from reaching production code.\u003c/p\u003e",
                        "FirstName": "Justin",
                        "LastName": "Collins",
                        "SessionID": "d81cd248-45f7-4aad-ac4c-e5bffab81444",
                        "MemberID": "021e7ff5-c64b-4e36-92e7-bb64c7257866",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "Four Dimensions of SSRS Report Authoring for Executives and Upper Management",
                        "Description": "\u003cp\u003e\r\n This session will uncover and delve into all four dimensions of report authoring using SSRS, with special attention to what needs to be discussed with management at the strategic planning stage:\u003c/p\u003e\r\n\u003cp\u003e\r\n 1: The Users\u003cbr /\u003e\r\n 2: The Data Source\u003cbr /\u003e\r\n 3: Report Authoring\u003cbr /\u003e\r\n 4: Delivery and Administration\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n This session will uncover and delve into all four dimensions of report authoring using SSRS, with special attention to what needs to be discussed with management at the strategic planning stage.\u003c/p\u003e",
                        "FirstName": "Ben",
                        "LastName": "Aminnia",
                        "SessionID": "56b25da2-cb98-4e4e-a63e-b89be1f6f011",
                        "MemberID": "ffd08423-584b-47ce-a3e2-79cb35d0fe42",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "Get Mobbed-Up On This - Mob Programming With The Trojans #1",
                        "Description": "\u003cp\u003e\r\n\tIn software development we rarely work as an individual.\u0026nbsp; Functioning as a team of software developers is hard.\u0026nbsp; In many \u0026ldquo;teams\u0026rdquo; you simply split up the work into individual chunks and work on each part separately and then at the end try and merge all the various code branches back together.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tNot only is this hard, it also results in certain parts of a code base being \u0026ldquo;owned\u0026rdquo; by an individual.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tMob programming is a whole team approach to software development.\u0026nbsp; The idea is if everyone on the team is involved with all aspects of the code then you should:\u003c/p\u003e\r\n\u003cul\u003e\r\n\t\u003cli\u003e\r\n\t\tGet a better code base, as multiple brains evaluated it as it was created.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tEveryone on the team can work on any part of the product as they all wrote it.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tSpecialized knowledge gets shared with the entire team bringing the collective value of the team up.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tBest practices will be more closely followed as there will be no \u0026ldquo;sneaking in\u0026rdquo; of bad code.\u003c/li\u003e\r\n\u003c/ul\u003e\r\n\u003cp\u003e\r\n\tSo bring your laptops, and your brains were going to build something beautiful together.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn the Get Mobbed-Up On This sessions we will be focused on solving problems as a team.\u0026nbsp; Since the sessions are short, the end result is not to ship working code (however we usually do), but rather the lesion we will be learning is how to program as a team.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tPitchforks not required!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tMob programming is a whole team approach to software development.\u0026nbsp; Join us as we learn how to solve problems as a team.\u003c/p\u003e",
                        "FirstName": "Daniel",
                        "LastName": "Lewis",
                        "SessionID": "861535a5-a351-48a9-bb42-2a6d4ef37124",
                        "MemberID": "5af322ad-bb66-4f5c-835c-227a4c3d1a7c",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Get Mobbed-Up On This - Mob Programming With The Trojans #2",
                        "Description": "\u003cp\u003e\r\n\tIn software development we rarely work as an individual.\u0026nbsp; Functioning as a team of software developers is hard.\u0026nbsp; In many \u0026ldquo;teams\u0026rdquo; you simply split up the work into individual chunks and work on each part separately and then at the end try and merge all the various code branches back together.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tNot only is this hard, it also results in certain parts of a code base being \u0026ldquo;owned\u0026rdquo; by an individual.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tMob programming is a whole team approach to software development.\u0026nbsp; The idea is if everyone on the team is involved with all aspects of the code then you should:\u003c/p\u003e\r\n\u003cul\u003e\r\n\t\u003cli\u003e\r\n\t\tGet a better code base, as multiple brains evaluated it as it was created.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tEveryone on the team can work on any part of the product as they all wrote it.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tSpecialized knowledge gets shared with the entire team bringing the collective value of the team up.\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tBest practices will be more closely followed as there will be no \u0026ldquo;sneaking in\u0026rdquo; of bad code.\u003c/li\u003e\r\n\u003c/ul\u003e\r\n\u003cp\u003e\r\n\tSo bring your laptops, and your brains were going to build something beautiful together.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn the Get Mobbed-Up On This sessions we will be focused on solving problems as a team.\u0026nbsp; Since the sessions are short, the end result is not to ship working code (however we usually do), but rather the lesion we will be learning is how to program as a team.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tPitchforks not required!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan id=\"ctl00_ContentPlaceHolder1_Sessions1_sessionDataList\"\u003e\u003cspan\u003e\u003cspan\u003eMob programming is a whole team approach to software development.\u0026nbsp; Join us as we learn how to solve problems as a team.\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Daniel",
                        "LastName": "Lewis",
                        "SessionID": "b91d8696-c2a3-4eca-8a7e-db27d273480b",
                        "MemberID": "5af322ad-bb66-4f5c-835c-227a4c3d1a7c",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "Getting Started with ASP.NET MVC",
                        "Description": "\u003cp\u003e\r\n\tASP.NET MVC is a great framework for building web applications on the .net platform. In this talk We will start with an introduction to core concepts needed to build an asp.net mvc web application.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tWe will look a the MVC design pattern and go over how the framework renders a page from start to finish.We willbuild a working application that will explain routing, controllers and views. We will\u0026nbsp;also interact with a database via the Entity Framework Code First and look at how you can persist your data to the database.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tWe will also cover some best practices, tips and resources you can use to further learn about ASP.NET MVC. This will be a code heavy session with lots of examples.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWould you like to learn ASP.NET MVC? This session is for you! We will go over an introduction to the framework \u0026amp; build a simple application. Learn about the MVC design pattern and how to interact with a database via EF code first. You will learn the basics of the framework and get resources on furthering your knoweldge on ASP.NET MVC.\u003c/p\u003e",
                        "FirstName": "Hattan",
                        "LastName": "Shobokshi",
                        "SessionID": "b106bc29-631e-402a-bbe0-0c4ce5a3ac30",
                        "MemberID": "0826193e-c1fe-463c-a1ec-a21d5fd60936",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Getting started with Python",
                        "Description": "\u003cp\u003e\r\n\tAn introduction to the widely popular Python programming language.\u003cbr /\u003e\r\n\t\u003cbr /\u003e\r\n\tWe\u0026#39;ll skip the history and jump right into coding so you are ready to start writing your first unit testable python scripts when you get home.\u003cbr /\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tYou can get the slides \u0026amp; code here:\u003cbr /\u003e\r\n\thttps://github.com/patrickwolf/python-tutorial\u003c/p\u003e\r\n\u003cp\u003e\r\n\tAnd feel free to give feedback:\u003cbr /\u003e\r\n\thttp://speakerrate.com/talks/26411-getting-started-with-python\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan id=\"ctl00_ContentPlaceHolder1_Sessions1_sessionDataList\"\u003e\u003cspan\u003e\u003cspan\u003eAn introduction to the widely popular Python programming language.\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Patrick",
                        "LastName": "Wolf",
                        "SessionID": "515baa7d-9193-4e63-a4fd-a1a4dc708d2e",
                        "MemberID": "636d2102-b775-4da3-9d32-7bf503602a77",
                        "Room": "THH 202",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Getting Started with Raspberry Pi",
                        "Description": "\u003cp\u003e\r\n\tThe Raspberry Pi is a small credit-card sized linux computer. Developers and hobbyists around the world are creating miraculous applications and projects, and now you can join them. This year\u0026#39;s presentation covers the first steps to using your Pi. From the basics, like burning your SD Card to creating a Weather Reporter, you will learn GPIO Basics and simple Python tools. Communication between other components using SPI or I2C will also be covered. It is recommended, but not required that you have a Raspberry Pi, some knowledge of Python and simple electronics.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThe Raspberry Pi is a small credit-card sized linux computer. Developers and hobbyists around the world are creating miraculous applications and projects, and now you can join them.\u003c/p\u003e",
                        "FirstName": "Tom",
                        "LastName": "Paulus",
                        "SessionID": "4c40eeae-4025-4b11-9158-506d3ff0143f",
                        "MemberID": "1c45aea5-99d9-4d3b-be2d-e81873a0052d",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Getting Started with Responsive Web Design - Part I",
                        "Description": "\u003cp\u003e\r\n\tCome joins us to go over the basics of Responsive Web Design.\u0026nbsp; In Part I of this two part session, we will cover all the components that make a website responsive.\u0026nbsp; We will talk about Grid systems, Media Queries, Front-end Frameworks, Resizable Images and much much more.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThis session was a complete success at the SoCal CodeCamp in San Diego.\u0026nbsp; Come and see why.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tFollow me on Twitter: \u003ca href=\"http://twitter.com/designsdrive\"\u003e@designsdrive\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\tVisit me on the web: \u003ca href=\"http://designsdrive.com\"\u003ehttp://designsdrive.com\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"https://github.com/mariohernandez/responsive\"\u003eYou can download the source code here\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"http://mariohernandez.github.io/responsive\"\u003eSee website sample for this session\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tAlso, check out the slides for this presentation.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ciframe allowfullscreen=\"\" frameborder=\"0\" height=\"356\" marginheight=\"0\" marginwidth=\"0\" mozallowfullscreen=\"\" scrolling=\"no\" src=\"http://www.slideshare.net/slideshow/embed_code/14708311\" style=\"max-width:427px;border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px\" webkitallowfullscreen=\"\" width=\"100%\"\u003e\u003c/iframe\u003e\u003c/p\u003e\r\n\u003cdiv style=\"margin-bottom:5px\"\u003e\r\n\t\u003cstrong\u003e\u003ca href=\"http://www.slideshare.net/marequi/introduction-to-responsive-web-design-14708311\" target=\"_blank\" title=\"Introduction to Responsive Web Design\"\u003eIntroduction to Responsive Web Design\u003c/a\u003e \u003c/strong\u003e from \u003cstrong\u003e\u003ca href=\"http://www.slideshare.net/marequi\" target=\"_blank\"\u003eMario Hernandez\u003c/a\u003e\u003c/strong\u003e\u003c/div\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIt\u0026#39;s not secret that mobile devices are dominating the way people access the web and its resources, this is why it\u0026#39;s so critical that your websites adapt to any device size, big and small.\u0026nbsp; Come see why this session was a complete success at the 2013 San Diego SoCal CodeCamp.\u003c/p\u003e",
                        "FirstName": "Mario",
                        "LastName": "Hernandez",
                        "SessionID": "b16043bc-1def-46a0-88b7-7fa63b5c07a6",
                        "MemberID": "f26a2094-3b0a-4bc9-9fee-4d1e6c169da6",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Getting Started with Responsive Web Design - Part II",
                        "Description": "\u003cp\u003e\r\n\tThis is the fun part.\u0026nbsp; Now that we know the basics of Responsive Web Design, we will dive into the code and build a fully functional responsive website.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tFollow me on Twitter: \u003ca href=\"http://twitter.com/designsdrive\"\u003e@designsdrive\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\tVisit me on the web: \u003ca href=\"http://designsdrive.com\"\u003ehttp://designsdrive.com\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"https://github.com/mariohernandez/responsive\"\u003eYou can download the source code here\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"http://mariohernandez.github.io/responsive\"\u003eSee website sample for this session\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tAlso check out the slides for this presentation:\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ciframe allowfullscreen=\"\" frameborder=\"0\" height=\"356\" marginheight=\"0\" marginwidth=\"0\" mozallowfullscreen=\"\" scrolling=\"no\" src=\"http://www.slideshare.net/slideshow/embed_code/14708311\" style=\"max-width:427px;border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px\" webkitallowfullscreen=\"\" width=\"100%\"\u003e\u003c/iframe\u003e\u003c/p\u003e\r\n\u003cdiv style=\"margin-bottom:5px\"\u003e\r\n\t\u003cstrong\u003e\u003ca href=\"http://www.slideshare.net/marequi/introduction-to-responsive-web-design-14708311\" target=\"_blank\" title=\"Introduction to Responsive Web Design\"\u003eIntroduction to Responsive Web Design\u003c/a\u003e \u003c/strong\u003e from \u003cstrong\u003e\u003ca href=\"http://www.slideshare.net/marequi\" target=\"_blank\"\u003eMario Hernandez\u003c/a\u003e\u003c/strong\u003e\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tContinuing where we left off in Part I of this presentation, we will build a fully responsive website.\u003c/p\u003e",
                        "FirstName": "Mario",
                        "LastName": "Hernandez",
                        "SessionID": "f277672d-718e-4105-a84d-2037c5555d24",
                        "MemberID": "f26a2094-3b0a-4bc9-9fee-4d1e6c169da6",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Getting Started with Ruby on Rails",
                        "Description": "\u003cp\u003e\r\n\tIn this session I\u0026#39;ll cover the basics of Ruby on Rails framework, and we will build a quick blog!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session I\u0026#39;ll cover the basics of Ruby on Rails framework, and we will build a quick blog!\u003c/p\u003e",
                        "FirstName": "Rob",
                        "LastName": "Davarnia",
                        "SessionID": "3ab521df-8657-44e4-9836-345a615d4c1c",
                        "MemberID": "d420524c-4f5d-4e8d-9206-5f2a9e3904ad",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Getting started with TypeScript",
                        "Description": "\u003cp\u003e\r\n\tTypeScript is a language for application-scale JavaScript development. With TypeScript, you can use existing any JavaScript library, \u0026amp; be called from other JavaScript code. In this talk, we will look at TypeScript and many of its features including support for classes, inheritance, types and more. We will also look at installing and using TypeScript in Visual Studio.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tTypeScript is a language for application-scale JavaScript development. With TypeScript, you can use existing any JavaScript library, \u0026amp; be called from other JavaScript code. In this talk, we will look at TypeScript and many of its features including support for classes, inheritance, types and more. We will also look at installing and using TypeScript in Visual Studio.\u003c/p\u003e",
                        "FirstName": "Hattan",
                        "LastName": "Shobokshi",
                        "SessionID": "728220db-35a1-4d6a-aecc-592284d1faa1",
                        "MemberID": "0826193e-c1fe-463c-a1ec-a21d5fd60936",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Hands-on workshop for Better Unit Testing",
                        "Description": "\u003cdiv\u003e\r\n\tBring your laptop to try out a koan (puzzles for learning). A Koan is a set of failing unit tests. Learning by doing with koan puzzles is fun, engaging, and produces remarkably quick results. Koans can be used to learn a variety of programming skills including languages and APIs. This session will challenge you in group and individual settings to complete these puzzles to get the unit tests to pass. After you decode the puzzle, we will reflect on what and how you have learned. Finally we will look into how to create your own koans for your particular testing needs.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tThis is a unique session will explore the use of the open source library Approval Tests to facilitate better unit testing verification in a collaborative fun workshop.\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tBring your laptop to try out a koan (puzzles for learning). A Koan is a set of failing unit tests. Learning by doing with koan puzzles is fun, engaging, and produces remarkably quick results.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e",
                        "FirstName": "Llewellyn",
                        "LastName": "Falco",
                        "SessionID": "3e83854a-fc9c-44aa-a9c7-8e388e3a0a46",
                        "MemberID": "7a171ffa-add1-4447-a1a5-b7c84f2452ae",
                        "Room": "OHE 122",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "How to Integrate TFS2013 with Sharepoint Server and Project Server 2013 Part 1",
                        "Description": "\u003cp\u003e\r\n In this session will demonstrate on how to install SharePoint Server 2013 and install project server.\u003c/p\u003e\r\n\u003cp\u003e\r\n Also will explain what service accounts are needed to be used and what permissions are needed.\u003c/p\u003e\r\n\u003cp\u003e\r\n Note: An\u0026nbsp;understanding on how to setup an\u0026nbsp;administer to domain networks will be assumed.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n A step by step approach on how to install Sharepoint Server 2013, Project Server 2013, and Team Foundation 2013.\u003c/p\u003e\r\n\u003cp\u003e\r\n This setup will be on a virtual domain\u0026nbsp;network using Hyper - V.\u003c/p\u003e",
                        "FirstName": "David",
                        "LastName": "Riley",
                        "SessionID": "cff6bd23-a740-4a4b-9ecf-128866bf3cbf",
                        "MemberID": "5ebc1468-a9f6-4835-8cf8-a7b61f28d79f",
                        "Room": "VHE 214",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "How to Integrate TFS2013 with Sharepoint Server and Project Server 2013 Part 2",
                        "Description": "\u003cp\u003e\r\n\tIn this session will pick up from where session 1 left off.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tWill demonstrate the installation of Team Foundation Server, SQL Server 2012 Report Server and the installation of Team Foundation Server Extensions for SharePoint Server and Project Server. Create a Project Web Application on SharePoint Server 2013.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tA step by step approach on how to install SharePoint Server 2013,\u0026nbsp;Project Server 2013, and Team Foundation Server 2013.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThis setup will be on a virtual domain network.\u003c/p\u003e",
                        "FirstName": "David",
                        "LastName": "Riley",
                        "SessionID": "8848d52c-f1b6-4fe9-a72b-76a9e6923aee",
                        "MemberID": "5ebc1468-a9f6-4835-8cf8-a7b61f28d79f",
                        "Room": "VHE 214",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "How to Integrate TFS2013 with Sharepoint Server and Project Server 2013 Part 3",
                        "Description": "\u003cp\u003e\r\n\tIn this session will create a sharePoint Site Collection and a Project Collection in Team Foundation Server. Set permissions in SharePoint and Team Foundation.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tCreate a team project in Visula Studio 2013.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tStart the integration between the project Web app and the project collection\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tA step by step approach on how to install SharePoint Server 2013,\u0026nbsp;Project Server 2013, and Team Foundation Server 2013.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThis setup will be on a virtual domain network.\u003c/p\u003e",
                        "FirstName": "David",
                        "LastName": "Riley",
                        "SessionID": "6c38a671-8ec3-467b-81eb-9a8c7853b844",
                        "MemberID": "5ebc1468-a9f6-4835-8cf8-a7b61f28d79f",
                        "Room": "VHE 214",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "How to Integrate TFS2013 with Sharepoint Server and Project Server 2013 Part 4",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; In this last session will go through on how to synchronize and map fields between the Team Project and the Project Web App.\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tA step by step approach on how to install SharePoint Server 2013,\u0026nbsp;Project Server 2013, and Team Foundation Server 2013.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThis setup will be on a virtual domain network.\u003c/p\u003e",
                        "FirstName": "David",
                        "LastName": "Riley",
                        "SessionID": "5e0488cf-1f20-42e0-aae8-1b79cb5d9a86",
                        "MemberID": "5ebc1468-a9f6-4835-8cf8-a7b61f28d79f",
                        "Room": "VHE 214",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "HTML5 and the App Store: The Missing Link",
                        "Description": "\u003cp\u003e\r\n\tSencha Touch and other HTML5-based frameworks can produce pretty amazing cross-platform apps, but sometimes you need to do some extra leg-work to get your app on the App Store (or Google Play, or Amazon!)\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session, we will cover the basics of packaging your app in Phonegap, acceptance criteria for several of the major app stores, and several common pitfalls you will run into along the way (both in your code, and in the submission process!)\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tLike HTML5 apps, this is a hybrid session. We will start with a demo, then move onto a discussion about what you will need to know, and then finally we will use code examples (HTML5, iOS, Android) to explain how the demo works.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session, we will cover wrapping your HTML5 app in Phonegap, acceptance criteria for several of the major app stores, and several common pitfalls you will run into along the way (both in your code, and in the submission process!)\u003c/p\u003e",
                        "FirstName": "Ahmed",
                        "LastName": "Bakir",
                        "SessionID": "b06147ab-1e5f-4473-b9ac-78b8b4006ef0",
                        "MemberID": "b38728ae-e97c-45e8-a122-63d7f16d9795",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "HTML5 Multiplayer Gaming with ASP.NET SignalR and EndGate",
                        "Description": "\u003cp\u003e\r\n\tUp until the past few years web based multiplayer games only existed within the realm of flash or other pluggable browser components. \u0026nbsp;With \u003ca href=\"http://asp.net/signalr\"\u003eASP.NET SignalR\u003c/a\u003e and \u003ca href=\"http://endgate.net\"\u003eEndGate\u003c/a\u003e, HTML5 multiplayer games can now be created with ease. \u0026nbsp;Come dive into game development where you\u0026#39;ll learn the basics of creating games for the web.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tUp until the past few years web based multiplayer games only existed within the realm of flash or other pluggable browser components. \u0026nbsp;With ASP.NET SignalR and EndGate, HTML5 multiplayer games can now be created with ease. \u0026nbsp;Come dive into game development where you\u0026#39;ll learn the basics of creating games for the web.\u003c/p\u003e",
                        "FirstName": "Nicholas",
                        "LastName": "Mullen",
                        "SessionID": "1fac32a8-3e59-43c8-9e8a-445efa708ec7",
                        "MemberID": "b534bf75-537c-47a1-9eb8-2bcc66355b58",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "IIS for Developers: Choose Your Own Adventure",
                        "Description": "\u003cdiv\u003e\r\n\tAre you tired of sessions that don\u0026rsquo;t quite cover what you want to learn about? Here is your chance to take part in customizing a session just for you. Attendees will have the opportunity to vote on a selection of IIS related topics and we will cover as many of the top picks as time allows.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tDo you want to discuss site deployment, SSL, the art of application pools, site troubleshooting, performance optimizations, load balancers? . . . Trust me you will have a hard time choosing!\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tYou rely on IIS to host your applications. Come learn what you need to know about IIS and how it can make your life easier.\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(102, 102, 102); font-family: Arial, Tahoma, Verdana, Helvetica, sans-serif; font-size: 15px; line-height: 24px;\"\u003eAttendees will have the opportunity to vote on a selection of IIS related topics and we will cover as many of the top picks as time allows.\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Steve",
                        "LastName": "Evans",
                        "SessionID": "66080eeb-32be-4098-a9b6-8bc5fc14b082",
                        "MemberID": "c65e2d54-68e4-47e9-93e2-a529c6b6889a",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Implementing Release Management with Microsoft Visual Studio 2013",
                        "Description": "\u003cp\u003e\r\n Releasing from TFS up to production is now possible. InRelease, a release management tool, which was recently acquired by Microsoft, is meant for bridging the gap between Development and Operations by providing a clear, repeatable, automated deployment procedure. InRelease serves as a Continuous Delivery solution for .NET teams that automates the release process from Visual Studio Team Foundation Server (TFS) up to production for faster and simpler deliveries. With pre-defined release paths, InRelease automatically deploys your application as a whole to multiple environments. Based on a business-approval workflow, InRelease improves coordination and communication between development, operations and quality assurance to make release cycles repeatable, visible, and more efficient. InRelease leverages the TFS integration platform to support multiple release scenarios from TFS and provide a complete release solution. In this session, we will show you how InRelease can help by automating deployments from TFS up to production to make release cycles faster, repeatable and more efficient. We will first review common development release scenarios, introduce related topics and terminology and will then go into more details on the Release Management tool itself by doing a walkthrough.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Releasing from TFS up to production is now possible. InRelease, a release management tool, which was recently acquired by Microsoft, is meant for bridging the gap between Development and Operations by providing a clear, repeatable, automated deployment procedure.\u003c/p\u003e",
                        "FirstName": "William",
                        "LastName": "Salazar",
                        "SessionID": "825033e2-b00c-4897-ae38-cf9d1f99f4d7",
                        "MemberID": "d9d72c83-ce11-499c-b0de-f03407d848f0",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "In search for the best deal, hacking with powershell.",
                        "Description": "\u003cp\u003e\r\n\tJust going to present on some fun things to do with ES or rather practical applications. This is really a post-mortem on a small project I worked on. We will talk about lifting content from sites and using it for our own needs. We are going to use ElasticSearch to index our data and allow us to do cool things with it. We will also talk about a few stumbling points such as exposing javascript API\u0026#39;s and reverse engineering other engineers solutions.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tFor code used checkout....\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"https://gist.github.com/mxrss\"\u003ehttps://gist.github.com/mxrss\u003c/a\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tRemember this?\u0026nbsp;\u003ca href=\"http://www.youtube.com/watch?v=zjiq9LKNwSE\"\u003ehttp://www.youtube.com/watch?v=zjiq9LKNwSE\u003c/a\u003e\u0026nbsp;The iconic opening scene in teh social network. Well we are going to do things along the same lines. Are objective is to aggregate data from a few coupons sites and index the data into ES.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Mike",
                        "LastName": "Roth",
                        "SessionID": "282cd16d-16fb-4685-adf3-da8d2f41aa38",
                        "MemberID": "8df92521-efe7-4f68-91e5-d023881ac62f",
                        "Room": "ZHS 163",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Intro to web hacking",
                        "Description": "\u003cp\u003e\r\n\tThis talks will cover the OWASP top 10 with explanations of the problems and potential solutions. There will be live demos and actual code to demonstrate the attacks and fixes.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThis talks will cover the OWASP top 10 with explanations of the problems and potential solutions. There will be live demos and actual code to demonstrate the attacks and fixes.\u003c/p\u003e",
                        "FirstName": "Neil",
                        "LastName": "Matatall",
                        "SessionID": "f80dea3f-0aea-43d8-87f6-553722b5738f",
                        "MemberID": "a7422359-8b78-42d6-bf5a-45634f869272",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Introduction to 3d printing at home with RepRap",
                        "Description": "\u003cp\u003e\r\n\tWith 3d printing becoming affordable enough to buy a printer for the home, there is a lot of excitement for what is possible. Learn how these inexpensive 3d printers work, and how they compare to the much more expensive commercial offerings. I will also quickly show some tools to create 3d designs you can print, and some of the constraints designs must follow.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWith 3d printing becoming affordable enough to buy a printer for the home, there is a lot of excitement for what is possible. Learn how these inexpensive 3d printers work, and how they compare to the much more expensive commercial offerings. I will also quickly show some tools to create 3d designs you can print, and some of the constraints designs must follow.\u003c/p\u003e",
                        "FirstName": "Nick",
                        "LastName": "Winters",
                        "SessionID": "ae37c00e-1de5-4b40-a176-36209c9550a0",
                        "MemberID": "9cdd31b4-3e31-4d5b-ab2d-a773ebc74ce9",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "Introduction to Bootstrap HTML/CSS framework",
                        "Description": "\u003cp\u003e\r\n\tOften web developers have a hard making a website look nice and pretty. Bootstrap HTML/CSS framework was invented to help those struggling with design skills and using it can accelerate prototyping of web applications that work on screens of any size.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tBootstrap implements responsive design and makes it very easy to be in control how you want your application to look like.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIn this session creator of the most popular website for Bootstrap snippets (\u003ca href=\"http://bootsnipp.com\" target=\"_blank\"\u003ebootsnipp.com\u003c/a\u003e), Maks Surguy\u0026nbsp;will introduce you to Bootstrap HTML/CSS framework that makes designing user-facing parts of a website easier and he will guide you through the essential features of Bootstrap that will immediately make your sites look a whole lot better.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session creator of the most popular website for Bootstrap snippets (\u003ca href=\"http://bootsnipp.com\" target=\"_blank\"\u003ebootsnipp.com\u003c/a\u003e), Maks Surguy will introduce you to Bootstrap HTML/CSS framework that makes designing user-facing parts of a website easier.\u003c/p\u003e",
                        "FirstName": "Maks",
                        "LastName": "Surguy",
                        "SessionID": "247773e0-5d0a-4400-98f5-ea150abda8bc",
                        "MemberID": "f17b2c9d-0e1f-4859-8752-aeab1520f11b",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "Introduction to building websites in NodeJs",
                        "Description": "\u003cp\u003e\r\n\tIn this presentation we will be going through the steps on how to create a basic web site in NodeJs.\u0026nbsp; In this presentation you will learn about the basics of NodeJs, Express (a web framework based on Ruby\u0026rsquo;s Sinatra), Jade (a template engine that renders html), AngularJs (a front end js MVW framework) and MongoDB (a NOSQL database).\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThe presentation is targeted to those who have worked in other frameworks and have been interested in learning about node.\u0026nbsp; Be prepared to learn and be amazed at how symple thing can be when there done right.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this presentation we will be going through the steps on how to create a basic web site in NodeJs.\u0026nbsp; In this presentation you will learn about the basics of NodeJs, Express (a web framework based on Ruby\u0026rsquo;s Sinatra), Jade (a template engine that renders html), AngularJs (a front end js MVW framework) and MongoDB (a NOSQL database).\u003c/p\u003e",
                        "FirstName": "Daniel",
                        "LastName": "Lewis",
                        "SessionID": "7abdf863-9895-435c-a890-975b0498410d",
                        "MemberID": "5af322ad-bb66-4f5c-835c-227a4c3d1a7c",
                        "Room": "THH 202",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Introduction to Graph Databases with Neo4j",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; In this session we\u0026amp;#39;ll focus on the characteristics of graph databases for managing connected data and the kinds of problem domains for which they are best suited. To reinforce how useful graph databases are, we provide a rapid, code-focused introduction to Neo4j, a leading open-source graph database, covering the APIs for manipulating and traversing graphs. We\u0026amp;#39;ll then use this knowledge to explore an example domain, using Neo4j to infer knowledge from connected, semi-structured data.\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWe\u0026#39;ll focus on the characteristics of graph databases for managing connected data and the kinds of problem domains for which they are best suited. To reinforce how useful graph databases are, we provide a rapid, code-focused introduction to Neo4j, a leading open-source graph database, covering the APIs for manipulating and traversing graphs.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Andrew",
                        "LastName": "Karcher",
                        "SessionID": "5a187054-a4b0-40b4-b889-5ca06b70212b",
                        "MemberID": "4de1d41e-f859-4066-b644-bc1f0336e3c6",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "Introduction to Laravel PHP framework",
                        "Description": "\u003cp\u003e\r\n\tBy attending this session you will learn about Laravel PHP framework, why it is powerful and how you can leverage its advantages to build your next web application quickly while having lots of fun developing.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tYou will be given an overview of Laravel and its features such as : powerful routing, ORM called Eloquent ORM, sessions, caching, Blade templating engine and more.\u0026amp;nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tMaks (the speaker) has built many real world applications using Laravel, some of his personal favorites:\u003c/p\u003e\r\n\u003cul\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003ca href=\"http://bootsnipp.com\" target=\"_blank\"\u003ehttp://bootsnipp.com\u003c/a\u003e\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003ca href=\"http://filegr.am\" target=\"_blank\"\u003ehttp://filegr.am\u003c/a\u003e\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u003ca href=\"http://mymaplist.com\" target=\"_blank\"\u003ehttp://mymaplist.com\u003c/a\u003e\u003c/li\u003e\r\n\u003c/ul\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session \u003ca href=\"http://maxoffsky.com\" target=\"_blank\"\u003eMaks Surguy\u003c/a\u003e\u0026nbsp;will introduce you to \u003ca href=\"http://laravel.com\" target=\"_blank\"\u003eLaravel PHP framework\u003c/a\u003e.\u003c/p\u003e",
                        "FirstName": "Maks",
                        "LastName": "Surguy",
                        "SessionID": "819cd36a-f492-483b-802d-6a770b4f1dcf",
                        "MemberID": "f17b2c9d-0e1f-4859-8752-aeab1520f11b",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Javascript for C#  Developer",
                        "Description": "\u003cp\u003e\r\n\tAgenda includes namespaces, variable scoping, duck typing, object orientntation ,getters and setters as well as reflection, inheritance, events,extension methods, anonymous types in javascript. \u0026amp;amp;nbsp;C# developers are familiar with these concepts, in this session, we will implement the same in Javascrip.Slides @ http://tinyurl.com/lg62fsc\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session, we will take what we know about OOP and apply it i to Javascipt. For example, implementating namespaces and encapsulation in Javascript. Slides :http://tinyurl.com/lg62fsc\u003c/p\u003e",
                        "FirstName": "Abhijit",
                        "LastName": "Gadkari",
                        "SessionID": "c54fd875-f506-4880-9a45-85fec3b0c92c",
                        "MemberID": "56feb21e-356d-4909-bfc3-8cc361865e93",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "JavaScript Simplified : Closures, Prototypes, Promises, and more",
                        "Description": "\u003cp\u003e\r\n\tInterested in Advanced JavaScript topics? In this talk we\u0026rsquo;ll look at some fundamental JavaScript concepts including closures, promises and prototypal inheritance. These will be gently introduced with real world examples \u0026amp; lots of code. You will learn how to use these features and when it\u0026rsquo;s appropriate to. Take your JavaScript skills to next level!\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tWe\u0026#39;ll start with JavaScript functions and get a fundamental understanding of how they work and what Functions as a first class citizen means. We\u0026#39;ll look at how Closures can give you a mechanism for hiding data and also protect your variables from the global scope via immediately invokved functions.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tInhertiance is possible with JavaScript and we\u0026#39;ll look at how you can do that with prototypes.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tPromises give you a great mechanism to write cleaner asynchronous code. We\u0026#39;ll look at promises from the eye of a library writer and consumer. We\u0026#39;ll see how promises can help us avoid ugly nested callbacks and make our code easier to read. We\u0026#39;ll also see how promises are implemented in libraries like jQuery and AngularJS.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tInterested in Advanced JavaScript topics? In this talk we\u0026rsquo;ll look at some fundamental JavaScript concepts including closures, promises and prototypal inheritance. These will be gently introduced with real world examples \u0026amp; lots of code. You will learn how to use these features and when it\u0026rsquo;s appropriate to. Take your JavaScript skills to next level!\u003c/p\u003e",
                        "FirstName": "Hattan",
                        "LastName": "Shobokshi",
                        "SessionID": "1e1598df-545f-4bff-ad17-f36f1fe34218",
                        "MemberID": "0826193e-c1fe-463c-a1ec-a21d5fd60936",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "LINQ to Objects A-Z",
                        "Description": "\u003cp\u003e\r\n I will provide a comprehensive review of LINQ method by the following classifications:\u003c/p\u003e\r\n\u003cp\u003e\r\n Mapping and conversion\u003c/p\u003e\r\n\u003cp\u003e\r\n Take-1 and Take-N\u003c/p\u003e\r\n\u003cp\u003e\r\n Filter\u003c/p\u003e\r\n\u003cp\u003e\r\n Flattening\u003c/p\u003e\r\n\u003cp\u003e\r\n Grouping\u003c/p\u003e\r\n\u003cp\u003e\r\n Aggregating\u003c/p\u003e\r\n\u003cp\u003e\r\n Combination\u003c/p\u003e\r\n\u003cp\u003e\r\n Time permitting, I will also discuss technique in converting real-world problems to LINQ queryable problems.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n LINQ is a wonderful part of .net platform that allows us to write code succinctly. In this talk, I will provide a comprehensive review of LINQ to Objects.\u003c/p\u003e",
                        "FirstName": "Li",
                        "LastName": "Chen",
                        "SessionID": "c5eff7ff-f57f-486f-8f6e-b316c0c3ef6b",
                        "MemberID": "9682e5d8-0e73-445e-92a3-2fe37cefdb7f",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Making money with Windows 8 (Windows Store) HTML/JS Applications",
                        "Description": "\u003cp\u003e\r\n\tAs an HTML/JavaScript developer you have several options available to you for publishing apps in the major app stores. Every platform has their own native option for app development. The problem with that approach is you greatly increase cost and code reuse is generally at a minimum and you generally have to learn a new language in the process thus increasing the time to market. In this talk I\u0026amp;amp;rsquo;ll take you through a great solution available to develop, publish, and monetize your HTML/JS applications in the app economy and as an added bonus, how to cloud enable your HTML/JS apps. For most demos in this presentation we\u0026#39;ll be working with WinJS creating a Windows 8 HTML5/JavaScript native application. Are you a jQuery developer? No problem! Are you an ASP.NET Developer? No problem!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tAs an HTML/JavaScript developer you have several options available to you for publishing apps in the major app stores. In this talk I\u0026#39;ll take you through a great solution available to develop, publish, and monetize your HTML/JS applications in the app economy and as an added bonus, how to cloud enable your HTML/JS store apps\u003c/p\u003e",
                        "FirstName": "Adam",
                        "LastName": "Tuliper",
                        "SessionID": "dc82c64f-c72d-490d-a1c6-695118caa6ef",
                        "MemberID": "258ad583-42f1-41d7-ba07-8faef429156a",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "Managing Self-Organizing Teams - An Old School Management Dilemma",
                        "Description": "\u003cp\u003e\r\n Two of the principles of the Agile Manifesto are Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done; and the best architectures, requirements, and designs emerge from self-organizing teams.\u003c/p\u003e\r\n\u003cp\u003e\r\n The Scrum Guide says \u0026ldquo;Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team.\u0026rdquo;\u003c/p\u003e\r\n\u003cp\u003e\r\n The game has changed. So, how do you manage self-organizing teams? And, what do we do with traditional managers? That\u0026rsquo;s what this session is all about. We want our teams to be highly productive, to grow professionally, to enjoy their work and be in it for the long haul. All while being good organizational citizens and driving on the proper side of the road. We\u0026rsquo;ll cover a little management theory on motivation and maintaining a positive, healthy work environment and I\u0026rsquo;ll show you how to put it to work.\u003c/p\u003e\r\n\u003cp\u003e\r\n Get ready for some serious management re-factoring.\u003c/p\u003e\r\n\u003cp\u003e\r\n \u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Agile self-organizing teams. So, how do you manage self-organizing teams? And, what do we do with traditional managers? That\u0026rsquo;s what this session is all about.\u003c/p\u003e",
                        "FirstName": "Mike",
                        "LastName": "Vincent",
                        "SessionID": "858fdf61-5523-4b20-b464-0367863b4c2b",
                        "MemberID": "73be5f05-b856-48fa-909d-d7e545fcc29e",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Master Code Development",
                        "Description": "\u003cp style=\"margin: 0in; font-family: Calibri; font-size: 11pt;\"\u003e\r\n What makes you a better coder? What makes you a professional coder? If you want to have an edge over your fellow developers - this session is for you. If you wonder how you can become a better developer - this session is for you. This is an interactive session for and about living and breathing code.\u003c/p\u003e",
                        "Brief_Description": "\u003cp style=\"margin: 0in; font-family: Calibri; font-size: 11pt;\"\u003e\r\n What makes you a better coder? What makes you a professional coder? If you want to have an edge over your fellow developers - this session is for you. If you wonder how you can become a better developer - this session is\u003c/p\u003e",
                        "FirstName": "Nuri",
                        "LastName": "Halperin",
                        "SessionID": "3fc6874a-787f-4442-9e2b-06f784f82283",
                        "MemberID": "b0f28df5-d0f9-462a-b143-d9ab3d1fdd22",
                        "Room": "SLH 100",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Master Code Development",
                        "Description": "\u003cp style=\"margin: 0in; font-family: Calibri; font-size: 11pt;\"\u003e\r\n What makes you a better coder? What makes you a professional coder? If you want to have an edge over your fellow developers - this session is for you. If you wonder how you can become a better developer - this session is for you. This is an interactive session for and about living and breathing code.\u003c/p\u003e",
                        "Brief_Description": "\u003cp style=\"margin: 0in; font-family: Calibri; font-size: 11pt;\"\u003e\r\n What makes you a better coder? What makes you a professional coder? If you want to have an edge over your fellow developers - this session is for you. If you wonder how you can become a better developer - this session is\u003c/p\u003e",
                        "FirstName": "Steve",
                        "LastName": "Bearman",
                        "SessionID": "3fc6874a-787f-4442-9e2b-06f784f82283",
                        "MemberID": "6672ee74-ee34-48a2-b309-d4fcb68f5759",
                        "Room": "SLH 100",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "MongoDB Aggregation Like A Champ!",
                        "Description": "\u003cp\u003e\r\n Want to tackle some data transformation? Dig up the skinny? Find out what\u0026#39;s going on with boatloads of records? Aggregatoin is how we do it! (Sometimes..)\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n MongoDB is a NoSQL implementation which is among the most popular choices to replace traditional relational databases.In the past, performing aggregations was a pain. Now with the 2.2 release, much of the reporting and transformation capabilities reserved to Map/Reduce operations has been eliminated.\u003c/p\u003e",
                        "FirstName": "Nuri",
                        "LastName": "Halperin",
                        "SessionID": "78d55aa6-18f5-4fed-a0d9-513f64f4d79d",
                        "MemberID": "b0f28df5-d0f9-462a-b143-d9ab3d1fdd22",
                        "Room": "ZHS 252",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Moving Your Organization into the Fast Lane - Delighting Your Customers",
                        "Description": "\u003cp\u003e\r\n Organizations today want to be more responsive to their marketplace opportunities, more productive and more efficient; they want to be agile. Many have implemented agile practices for improving software development. But if you want to move out of traffic and into the fast lane it requires leadership that emphasizes creating, satisfying and delighting customers every day.\u0026lt;/p\u0026gt; \u0026lt;p\u0026gt; This session focuses on leadership techniques for delighting your customers that you can take back and put to use. You will learn how a culture of delighting customers is built around a work force characterized by high levels of productivity, continuous innovation, and elevated levels of sustained motivation and job satisfaction. Your customers are your lifeblood; it\u0026amp;rsquo;s not enough just to satisfy them. You need them sharing their delight with others, sharing opportunities with you, and coming back again and again. Move into the fast lane! Focus your organization on delighting your customers on a continuous long-term basis. It\u0026#39;s hard work but immensely rewarding.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n This session focuses on leadership techniques for delighting your customers that you can take back and put to use. You will learn how a culture of delighting customers is ...\u003c/p\u003e",
                        "FirstName": "Mike",
                        "LastName": "Vincent",
                        "SessionID": "c713126c-a5cd-4dd8-99e9-02e321c66983",
                        "MemberID": "73be5f05-b856-48fa-909d-d7e545fcc29e",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "New T-SQL Features in SQL 2012",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; With SQL 2012 comes a slew of enhancements on the Programmability side. This session will explore some of those new features such as Analytic Functions, Over Clause (Window Functions), Date Functions, Conversion Functions, Sequence Objects, Paging and FileTables to name just a few. If you want to get a jump on those features you will be seeing in SQL 2012 this is the session for you.\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWith SQL 2012 comes a slew of enhancements on the Programmability side. This session will explore some of those new features. \u0026nbsp;If you want to get a jump on those features you will be seeing in SQL 2012 this is the session for you.\u003c/p\u003e",
                        "FirstName": "Andrew",
                        "LastName": "Karcher",
                        "SessionID": "d9ac4441-cf46-4b2c-bb7f-22c196e55549",
                        "MemberID": "4de1d41e-f859-4066-b644-bc1f0336e3c6",
                        "Room": "THH 202",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "Nuget like a pro",
                        "Description": "\u003cp\u003e\r\n\tStop mapping a network share and dumping your dependencies there, use nuget instead. \u0026nbsp;You can use nuget to:\u003c/p\u003e\r\n\u003cp\u003e\r\n\t* package your private code\u003c/p\u003e\r\n\u003cp\u003e\r\n\t* package 3rd party libraries that won\u0026#39;t get on the nuget bandwagon\u003c/p\u003e\r\n\u003cp\u003e\r\n\t* distribute source code and pdbs to other developers on your team\u003c/p\u003e\r\n\u003cp\u003e\r\n\t* host your own private nuget server on premisis, or use a nuget-as-service provider to host a private feed for you.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tI\u0026#39;ll show this all to you during this session.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tYou already know nuget is great. \u0026nbsp;Take the next step... make your own packages! \u0026nbsp;You don\u0026#39;t need to be open source to take advantage of all nuget has to offer. \u0026nbsp;You can package, host and distribute packages internally too!\u003c/p\u003e",
                        "FirstName": "Jim",
                        "LastName": "Counts",
                        "SessionID": "8037c014-764a-412e-9cc0-4fd09cbae071",
                        "MemberID": "240814a4-0901-4b91-824f-d4ee66e49399",
                        "Room": "ZHS 163",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Obama, JQuery, \u0026 ASP.NET SignalR. Getting Started with the Real-Time Web",
                        "Description": "\u003cp\u003e\r\n\tThis session is intended for the everyday developer who is interested in a more traditional implementation of the (non-game-related) Real-Time Web. While primarily an introduction to ASP.NET SignalR, we will also be discussing some fundamental HTML 5/JavaScript concepts relevant to our sample application.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tIf you are a typical web developer that spends most of your day working on business applications and would like to see what it would take to get started with the Real-Time Web and discuss where and when it\u0026rsquo;s applicable to your application, this session is for you. All skill levels are welcome \u0026ndash; no gymnastics required.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThis session is intended for the everyday developer who is interested in a more traditional implementation of the (non-game-related) Real-Time Web. While primarily an introduction to ASP.NET SignalR, we will also be discussing some fundamental HTML 5/JavaScript concepts relevant to our sample application.\u003c/p\u003e",
                        "FirstName": "Michael",
                        "LastName": "Ossou",
                        "SessionID": "11b98c61-e542-4243-a6e0-994a63b090fe",
                        "MemberID": "6ceebd66-cc5b-4083-845b-1a4fb9bfb235",
                        "Room": "SLH 200",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "One More Time: Scrum Fundamentals",
                        "Description": "\u003cp\u003e\r\n Scrum is the most used agile framework for managing software development. Can Scrum help you deliver successful projects? You first have to understand the fundamentals of Scrum. This recently refreshed session will pragmatically explore using Scrum. We\u0026#39;ll talk about what how to get started adopting Scrum, what kinds of organizational commitments are needed and how to scale Scrum for very large projects.\u003c/p\u003e\r\n\u003cp\u003e\r\n Scrum is incredibly simple on the surface but touches profoundly on people, process and technology. What should you expect if you do it right, and what if you don\u0026#39;t? Join our discussion and tune-up your Scrum knowledge. It all starts with understanding the Scrum Fundamentals.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n Scrum is incredibly simple on the surface but touches profoundly on people, process and technology. What should you expect if you do it right, and what if you don\u0026#39;t? Join our discussion and tune-up your Scrum knowledge. It all starts with understanding the Scrum Fundamentals.\u003c/p\u003e",
                        "FirstName": "Mike",
                        "LastName": "Vincent",
                        "SessionID": "3108d9ab-1aed-46d0-bbc5-4bc69b10b31c",
                        "MemberID": "73be5f05-b856-48fa-909d-d7e545fcc29e",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Optimizing the HealthCare Industry through Technology",
                        "Description": "While the government attempts to make the healthcare more affordable, we can also help to make it more efficient and accurate. This session explains from an engineer\u0027s prospective how we can contribute to this industry and make the technology more meaningful to the people. In this session, we will discuss how to use HL7, ICD-9, CPT, SNOMED, RxNorm with RESTful service, Rule Engine, SharePoint, InfoPath, ASP.NET, and other technologies to implement clinical alerts, risk scoring algorithm, and better workflow. There has never been a better time to use technology to improve patient healthcare than right now. Come join us for the discussion!",
                        "Brief_Description": "While the government attempts to make the healthcare more affordable, we can also help to make it more efficient and accurate. This session explains from an engineer\u0027s prospective how we can contribute to this industry and make the technology more meaningful to the people.",
                        "FirstName": "CJ",
                        "LastName": "Wang",
                        "SessionID": "89096d28-a637-4ff3-a551-928b370c94ef",
                        "MemberID": "39659d00-e898-426f-a8c0-25bda69a9471",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "REST Easy: Leverage HTTP to build simple, scalable web services",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; HTTP has become the de facto communication protocol for virtually all things connected to the internet. Everything from enterprise databases to the thermostat in your house can communicate via HTTP-based web services. \u0026amp;nbsp;But how well do you really know this critical part of the internet? \u0026amp;nbsp;Are you equipped with the knowledge needed to build apps and services that can participate? This talk is a deep dive into the guts of HTTP and HTTP-based web services. \u0026amp;nbsp;You will leave with a solid understanding of the fundamentals of the HTTP protocol, and how the REST architectural lets you use HTTP to build amazingly simple and scalable web services.\u0026amp;nbsp;\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tFrom databases to thermostats, HTTP and HTTP-based services are the way nearly all things on the internet now communicate. But how well do you know HTTP? Do you know whats needed to build apps and services that can participate? This talk is a deep dive into HTTP and REST. You will leave with a solid understanding of HTTP and how REST lets you build simple, scalable services.\u003c/p\u003e",
                        "FirstName": "Devin",
                        "LastName": "Rader",
                        "SessionID": "a485db9c-293f-4031-9eeb-131865bde6ce",
                        "MemberID": "1fcaf40f-7d88-4aad-803a-3b5d61c7108f",
                        "Room": "OHE 122",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Routing with Asp.Net",
                        "Description": "\u003cp\u003e\r\n\tHow does routing work in Asp.Net MVC. Adding a new route, does order matter? How can I find out? These are the questions you\u0026#39;ll likely have. Here you\u0026#39;ll learn the basics of routing with a little advanced thrown in for good measure. You\u0026#39;ll learn alternate methods of adding routes other than the standard MVC method. We\u0026#39;ll also learn how routing can help you in Asp.Net Webforms\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tHow does routing work in Asp.Net MVC. Adding a new route, does order matter? How can I find out? These are the questions you\u0026#39;ll likely have. Here you\u0026#39;ll learn the basics of routing with a little advanced thrown in for good measure.\u003c/p\u003e",
                        "FirstName": "Ben",
                        "LastName": "Dornis",
                        "SessionID": "c3ac6cdf-8a06-4e9c-9a57-05727a2c8bf7",
                        "MemberID": "2453debd-fc7e-4bb5-b657-b0bd31041e95",
                        "Room": "WPH 205",
                        "Start": "\/Date(1384028100000)\/"
                    },
                    {
                        "Title": "Scaling from here to there - How Hybrid helps",
                        "Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(0, 0, 0); font-family: Arial; font-size: medium; \"\u003eMobile, cloud and \u0026quot;Big Data\u0026quot; applications require distributed computing. This talk will discuss a hybrid database model whereby scale-up relational technology and scale-out \u0026quot;NoSQL\u0026quot; technology are integrated to deliver significant benefits for a new generation of applications and how \u0026quot;Big Data\u0026quot; insight can be gained using techniques like Map Reduce.\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(0, 0, 0); font-family: Arial; font-size: medium; \"\u003eLearn how a hybrid database model whereby scale-up relational technology and scale-out \u0026quot;NoSQL\u0026quot; technology are integrated to deliver significant benefits for a new generation of applications.\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Ian",
                        "LastName": "Miller",
                        "SessionID": "63869321-882b-4f5c-b4b5-b4c913f3c0ad",
                        "MemberID": "371c1631-3e71-4ea3-bf4b-b5156cbd4c09",
                        "Room": "THH 202",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Search Engine-Building with Lucene and Solr, Part 1",
                        "Description": "\u003cdiv\u003e\r\n\tIf your application relies on simple string comparison to search through text-based data, you might want to learn about an alternative approach. In this session, I will introduce you to Apache Lucene and Apache Solr, discuss what they offer, and show you how to use them to build your own search feature.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tThis is the first part of a two-part presentation and requires no prior knowledge of Lucene and Solr. Topics that I plan to cover:\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* inverted index concepts\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* how indexing and searching work\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* different types of queries\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* filtering\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* faceting\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* sorting\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIf your application relies on simple string comparison to search through text-based data, you might want to learn about an alternative approach. In this session, I will introduce you to Apache Lucene and Apache Solr, discuss what they offer, and show you how to use them to build your own search feature.\u003c/p\u003e",
                        "FirstName": "Kai",
                        "LastName": "Chan",
                        "SessionID": "cc1e6803-b0ec-4832-b8df-e15ea7bd7694",
                        "MemberID": "9884d65b-7655-4bea-8515-cdd273cfbe18",
                        "Room": "ZHS 252",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Search Engine-Building with Lucene and Solr, Part 2",
                        "Description": "\u003cdiv\u003e\r\n\tIf your application relies on simple string comparison to search through text-based data, you might want to learn about an alternative approach. In this session, I will introduce you to Apache Lucene and Apache Solr, discuss what they offer, and show you how to use them to build your own search feature.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tThis is the second part of a two-part presentation and builds on the first part. Topics that I plan to cover:\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* tokenization concepts: tokens, stop words, stems, synonyms\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* indexing process: analyzer, update request processor, update handler\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* query elevation (\u0026quot;sponsored listings\u0026quot;)\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* query suggestion (\u0026quot;autocompete\u0026quot;)\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* document suggestion (\u0026quot;more like this\u0026quot;)\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* spatial search\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t* replication and distributed search (\u0026quot;SolrCloud\u0026quot;)\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIf your application relies on simple string comparison to search through text-based data, you might want to learn about an alternative approach. In this session, I will introduce you to Apache Lucene and Apache Solr, discuss what they offer, and show you how to use them to build your own search feature.\u003c/p\u003e",
                        "FirstName": "Kai",
                        "LastName": "Chan",
                        "SessionID": "8cdfd955-2cd4-44a2-ad08-5353e079685a",
                        "MemberID": "9884d65b-7655-4bea-8515-cdd273cfbe18",
                        "Room": "ZHS 252",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "Serialization in .NET",
                        "Description": "\u003cp\u003e\r\n A lot of work in .NET gets done by converting objects into other formats in order to store (or transmit) the values and then convert back into an object later on.\u0026nbsp; This is known as serialization and deserialization of object state.\u0026nbsp; In this session, you will learn the options available for serialization, formatting and deserialization of objects in .NET, using in order to create SOAP, binary, JSON and XML representations of object state, and how you can customize objects to control what information is serialized and how it is restored.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n In this session, you will learn the options available for serialization, formatting and deserialization of objects in .NET, using in order to create SOAP, binary, JSON and XML representations of object state, and how you can customize objects to control what information is serialized and how it is restored.\u003c/p\u003e",
                        "FirstName": "John",
                        "LastName": "Kuhn",
                        "SessionID": "a0f4c1aa-1847-43f2-99d9-2c4adf058848",
                        "MemberID": "40c86e55-bbc1-4cc0-8ce4-cf4ebc883a22",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Service Stack 101",
                        "Description": "\u003cp\u003e\r\n\t\u003cspan mce_style=\"color: #222222; font-family: Arial, Verdana, sans-serif;\"\u003e\u003cspan class=\"mceItemHidden\"\u003eIn this session we will look at Service Stack as an\u0026nbsp;alternative\u0026nbsp;wait to\u0026nbsp;publish\u0026nbsp;services. Service Stack is an\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"mceItemHidden\" style=\"color: rgb(0, 0, 0); font-family: Verdana, Arial, Helvetica, sans-serif;\"\u003e\u003cspan class=\"hiddenSpellError\" pre=\"\" style=\"border-bottom-width: 2px; border-bottom-style: solid; border-bottom-color: red; cursor: default;\"\u003eOpensource\u003c/span\u003e\u0026nbsp;.NET and Mono REST Web Services framework that has few\u0026nbsp;dependencies\u0026nbsp;making\u0026nbsp;testing and\u0026nbsp;portability\u0026nbsp;easy.\u003c/span\u003e\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan mce_style=\"color: #222222; font-family: Arial, Verdana, sans-serif;\"\u003e\u003cspan class=\"mceItemHidden\"\u003eIn this session we will look at Service Stack as an\u0026nbsp;alternative\u0026nbsp;wait to\u0026nbsp;publish\u0026nbsp;services. Service Stack is an\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"mceItemHidden\" style=\"color: rgb(0, 0, 0); font-family: Verdana, Arial, H...",
                        "FirstName": "Woody",
                        "LastName": "Pewitt",
                        "SessionID": "38433785-6f95-4da6-b1d7-0847b44a2286",
                        "MemberID": "73c8931d-0fd4-43be-84d8-928af6ca55e4",
                        "Room": "WPH 207",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "Single Page Application (SPA) for Enterprise with WebApi",
                        "Description": "\u003cp\u003e\r\n\tThere are many information regarding SPA out on the web but most lack critical information about how to make SPA work for Enterprise solution. In the context of SPA and WebApi, the topics will include choosing proper SPA frameworks, Authentication, Authorization, Logging, Exception Handling, MVVM, Deployment, Debugging, and Testing.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThis session will cover on how to build Enterprise web app using SPA with WebApi. In the context of SPA and WebApi, the topics will include choosing proper SPA frameworks, Authentication, Authorization, Logging, Exception Handling, MVVM, Deployment, Debugging, and Testing.\u003c/p\u003e",
                        "FirstName": "Henry",
                        "LastName": "Lee",
                        "SessionID": "b242be59-450e-4877-b470-179fc9b5f1b6",
                        "MemberID": "a57742c8-2d27-469f-8c02-a1614830763b",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "SOA Sucks… Introducing the MOA",
                        "Description": "\u003cp\u003e\r\n\tWith the rapid evolution of our data driven, interconnected world, the demand for technologies such as NoSQL has never been greater. Whether\u0026nbsp;it\u0026#39;s building a \u0026ldquo;greenfield\u0026rdquo; application or migrating an existing application, achieving web scale can still be a daunting task.\u0026nbsp; Existing patterns such as N-Tier and its evolution, the Service Oriented Architecture (SOA) suffer from serious deficiencies in performance, complexity, and maintainability.\u0026nbsp; Fortunately, the next evolution in distributed application patterns is here.\u0026nbsp; This session will introduce the Mission Oriented Architecture (MOA) and illustrate its clear superiority through FatDB, an example of a mature, battle hardened, distributed application platform. Participants will be both entertained and educated as the\u0026nbsp;presentation explores new ways to reduce the total cost of ownership, complexity, and time to market.\u003cbr /\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThe following topics will be covered:\u003c/p\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; The essential ingredients of a distributed web-scale application\u003c/p\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; The shortcomings of N-Tier and SOA\u003c/p\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; The MOA as evolutionary step beyond SOA\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; NoSQL, \u0026ldquo;Big data\u0026rdquo;, LINQ, and map-reduce\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; SQL server integration and caching scenarios\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; Distributed file stores\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; Turbo-charging your synchronous and asynchronous business logic\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026bull; Evaluating TCO, TTM and complexity\u003c/p\u003e\r\n\t\u003cp\u003e\r\n\t\t\u0026nbsp;\u003c/p\u003e\r\n\u003c/div\u003e\r\n\u003cp\u003e\r\n\tThe audience will also leave the room having gained an introduction to the new \u0026ldquo;state-of-the-art\u0026rdquo; and a comprehensive toolbox for building flexible and scalable applications.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\t\u003cspan style=\"color: rgb(0, 0, 0); font-family: Arial; \"\u003eWith the rapid evolution of our data driven, interconnected world, the demand for technologies such as NoSQL has never been greater.\u003c/span\u003e\u003c/p\u003e",
                        "FirstName": "Justin",
                        "LastName": "Weiler",
                        "SessionID": "8884c58a-c1ac-4afe-ba8c-cc59199bfa8b",
                        "MemberID": "a7c1d91c-b3f1-4d2f-96d9-77f4ac997231",
                        "Room": "ZHS 352",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Specifications On Steroids w/ Simple.Testing Pt 1. - The UI",
                        "Description": "\u003cp\u003e\r\n\tAs engineers we find that communicating with business users is difficult. In this talk we\u0026#39;ll show you how simple, expression based specifications can improve that communication. We\u0026#39;ll start at the UI and work our way to the application services. The demo will use NancyFx w/ Razor as the web layer; however these techniques should be applicable to any framework.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tAs engineers we find that communicating with business users is difficult. In this talk we\u0026#39;ll show you how simple, expression based specifications can improve that communication. We\u0026#39;ll start at the UI and work our way to the application services. The demo will use NancyFx w/ Razor as the web layer; however these techniques should be applicable to any framework.\u003c/p\u003e",
                        "FirstName": "Joao",
                        "LastName": "Braganca",
                        "SessionID": "8ad4513a-6cac-49d8-81c0-d74b7b78776c",
                        "MemberID": "e8c3b426-077f-4ff6-aa54-dba9d936759c",
                        "Room": "VHE 210",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Specifications On Steroids w/ Simple.Testing Pt 2. - The Domain",
                        "Description": "\u003cp\u003e\r\n\tAs engineers we find that communicating with business users is difficult. In this talk we\u0026#39;ll show you how combining the messaging pattern with simple, expression based specifications can improve that communication. We\u0026#39;ll start at the domain and work our way up to the application services.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tAs engineers we find that communicating with business users is difficult. In this talk we\u0026#39;ll show you how combining the messaging pattern with simple, expression based specifications can improve that communication. We\u0026#39;ll start at the domain and work our way up to the application services.\u003c/p\u003e",
                        "FirstName": "Joao",
                        "LastName": "Braganca",
                        "SessionID": "7959eb98-1fa6-44da-b791-7f0f4e66f86e",
                        "MemberID": "e8c3b426-077f-4ff6-aa54-dba9d936759c",
                        "Room": "VHE 210",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "Text Mining of Javadoc and RPMs with Groovy",
                        "Description": "\u003cp\u003e\r\n\tThe era of Big Data is upon us. A key requirement is extracting useful information from unstructured text containing natural human language. Learn how to process and display text using GATE (General Architecture for Text Engineering), Lucene, and Ratpack. As a bonus see how Groovy can speed up your work over using plain Java.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThe applications that I\u0026#39;ll use to demonstrate these techniques are analyzing source code, comments, and related text. Specifically Javadoc comments from Java sources and package descriptions from RPM packages. So if you\u0026#39;re interested in metaprogramming, then don\u0026#39;t miss this talk!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tLearn how to process and display text using GATE (General Architecture for Text Engineering), Lucene, and Ratpack. As a bonus see how Groovy can speed up your work compared to using plain old Java.\u003c/p\u003e",
                        "FirstName": "Jim",
                        "LastName": "White",
                        "SessionID": "61b7c73d-f4e1-49c4-8e20-f691b12621de",
                        "MemberID": "1c609fd1-48c9-45f7-b4be-2918d5fa0d39",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384037100000)\/"
                    },
                    {
                        "Title": "The case for Unit Tests",
                        "Description": "\u003cp\u003e\r\n\tIf you are new to unit testing or need a refresher, this is for you.\u0026nbsp; This session will define unit testing (and what it is not), explain justifications for using it within projects, and best practices.\u0026nbsp; Supplemental items, such as mocking, will also be covered. \u0026nbsp; Java/JUnit will be used in examples, but the fundamentals apply to all languages.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIf you are new to unit testing or need a refresher, this is for you.\u0026nbsp; This session will define unit testing (and what is not), explain justifications for using it within projects, and best practices.\u003c/p\u003e",
                        "FirstName": "Vincent",
                        "LastName": "Hernandez",
                        "SessionID": "d5f0bbf2-6117-402f-9fb9-14403fd4c232",
                        "MemberID": "49afc4b3-1847-4404-9417-9e36105e6b27",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384041600000)\/"
                    },
                    {
                        "Title": "The Future of Angular JS",
                        "Description": "\u003cdiv\u003e\r\n\tCome Learn about where Angular JS is going and what to expect in the future.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tVojta Jina works at Google on the AngularJS team. He is also the author of the JavaScript test runner, Karma (formerly Testacular). Don\u0026#39;t miss an opportunity to learn from a core team member.\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tCome Learn about where Angular JS is going and what to expect in the future.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tVojta Jina works at Google on the AngularJS team. He is also the author of the JavaScript test runner, Karma (formerly Testacular). Don\u0026#39;t miss an opportunity to learn from a core team member.\u003c/div\u003e",
                        "FirstName": "Vojta",
                        "LastName": " Jína",
                        "SessionID": "702fed42-c9bb-4f00-b2be-1dbc4fea6719",
                        "MemberID": "b9f46598-f0d2-481f-8872-ef42ae547d90",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384032600000)\/"
                    },
                    {
                        "Title": "The inner workings of the distributed non-relational data store",
                        "Description": "\u003cp\u003e\r\n\tWe\u0026#39;ve all heard stories of how one deployed a NoSQL database and it saved the day or how deploying a NoSQL data store has helped solved some scaling issue. I don\u0026#39;t claim to be an expert in the field of database because I have many heros in this field who are all better than I am. I am offering to do the leg work for the community and do the research on the inner workings of the distributed non-relationship data store that are out there. I want to share my findings and hopfully we can all develop a much better technical understanding on the technology.\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e\r\n\u003cp\u003e\r\n\tPrimarily, we will examine the design philosophy of Amazon DynamoDB and how its design is reflected and has influenced other solutions out there.\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tDistributed non-relational data store has been a developer hot topic in the recent years. In this presentation, we will look beyond the application anecdotes for those technology and really dive deep into how exactly those data stores are created and designed.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Jonathan",
                        "LastName": "Lau",
                        "SessionID": "4fcd6745-46cd-4298-993a-edad0640c61d",
                        "MemberID": "e2734d99-eb90-4757-ac77-4cca1c44a09f",
                        "Room": "VHE 206",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "The Power of Using Javascript/HTML5 and Native Code to Build Hybrid WP8 Apps",
                        "Description": "\u003cp\u003e\r\n\tSlides posted here:\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u003ca href=\"https://www.dropbox.com/s/o1pi7dntya304li/WP8%20Hybrid%20App.pptx\"\u003ehttps://www.dropbox.com/s/o1pi7dntya304li/WP8%20Hybrid%20App.pptx\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\r\n\tBuilding a native mobile app gives developers the ability to create a user experience consistent with what users has come to expect in a mobile application.\u0026nbsp; Not only will the look and feel be familiar to the user, but key functionality may only be available using native code and API\u0026rsquo;s.\u0026nbsp; However, in certain cases being able to write your code once, or re-use existing web based (Javascript/HTML5) code can dramatically reduce the time and effort need to build a responsive cross-platform application.\u0026nbsp; This session will present an example of how to build a graphically rich animation WP8 app using HTML5 canvas and Javascript for the animation, and native WP8 code for the UI elements to preserve the overall look and feel of a native app. Key concepts will be presented along with code snippets and a demonstration of the resulting app.\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tAre you a Javascript/HTML5 web developer looking to jump into building stand-alone WP8 apps? Are you a mobile developer looking for cross platform compatibility to minimize your coding effort?\u0026nbsp; Building a mobile application which utilizes the best of both native and web technologies may be the answer you\u0026rsquo;re looking for.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Rob",
                        "LastName": "Thuleen",
                        "SessionID": "1608d461-93a5-4eb5-827d-218e0f6b686e",
                        "MemberID": "2e4acf5d-e419-4956-b7ca-d3cdd112727f",
                        "Room": "VHE 217",
                        "Start": "\/Date(1384015500000)\/"
                    },
                    {
                        "Title": "The road to Atlantis - What you need to know about Temporal Coupling",
                        "Description": "\u003cp\u003e\r\n\tWhen we start on our quest in creating a solution that solves what business wants from us, it is our best intent to come up with a simple system. And sometimes, we are blinded by the simplicity of the code itself in calling these \u0026quot;services\u0026quot; in a synchronous fashion. But by doing so, we unintentionally mask the availability concern. Yes, calling a service with three lines of code is indeed simple looking and easy. But, it hides a lot of What-ifs. What if the service is not up? What if the client called the method and the service operation is executing and the operation timed out on the client side, but the operation completed on the server side? What if this was a web service in a land far far away? Should we need to retry the failed operation? Can we safely retry the operation? And this brings us to the land of temporal coupling.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tIn this session, we\u0026#39;ll take a deep dive into what makes the systems we write reliable and how to address the classic temporal coupling problem. We\u0026#39;ll see how classic Event Driven Architecture and messaging helps address this and build a reliable bus based system using NServiceBus.\u003c/p\u003e",
                        "FirstName": "Indu",
                        "LastName": "Alagarsamy",
                        "SessionID": "1189fd83-a9f1-404a-b087-d1f9b419e3b9",
                        "MemberID": "7b87cf73-692c-4922-b57c-bbb9d572f1c3",
                        "Room": "VHE 214",
                        "Start": "\/Date(1384102800000)\/"
                    },
                    {
                        "Title": "Through Glass: Building apps for Google Glass with App Engine and the Mirror API",
                        "Description": "\u003cp\u003e\r\n\tWe will cover the following topics:\u003c/p\u003e\r\n\u003cul\u003e\r\n\t\u003cli\u003e\r\n\t\tGlass overview \u0026amp; demo\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tCreating a Mirror API app hosted on App Engine (we\u0026#39;ll use Java or Python)\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tWe will build a simple note-taking application and explore how to add it as a sharing contact and using voice triggers\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tInserting cards into the Glass timeline\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\tWe will explore the possibilities of \u0026#39;real\u0026#39; Android apps on Glass, and how to build and deploy Android apps to Glass\u003c/li\u003e\r\n\t\u003cli\u003e\r\n\t\t\u0026#39;Hacking\u0026#39; glass - what else can you do with an Android-powered computer on your head?\u003c/li\u003e\r\n\u003c/ul\u003e\r\n\u003cp\u003e\r\n\tFeel free to stick around afterwards to try Glass for yourself if you haven\u0026#39;t yet!\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tLearn about the development process for Glass, how apps can be created and hosted, and the future of \u0026#39;real\u0026#39; Android apps on Glass.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "David",
                        "LastName": "Carr",
                        "SessionID": "48e64515-0774-4e36-afeb-b9ff7c7f9aa2",
                        "MemberID": "6d8c18f8-80f5-490a-b710-8c33fcadd5ea",
                        "Room": "THH 202",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Unity Game Development: Jumping Into Game Development",
                        "Description": "\u003cp\u003e\r\n\tAround four months ago I decided that \u0026#39;d like to extend my JavaScript skills and get into game development. Today, my first game \u0026quot;Awesome Zombie Sniper\u0026quot; (http://bit.ly/12PNGEM)\u0026nbsp;gets around 6,000 new players each day.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tUnity is an amazing engine, can be used with JavaScript, C# and Boo; and can be deployed on virtually all systems. Major games like Deus Ex: The Fall, Angry Birds: The Piggies or Dead Trigger 2 were developed using Unity.\u003c/p\u003e\r\n\u003cp\u003e\r\n\tThis session gives a quick intro Unity game development, enabling people to build their first game!\u003c/p\u003e\r\n\u003cp\u003e\r\n\t\u0026nbsp;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tAround four months ago I decided that \u0026#39;d like to extend my JavaScript skills and get into game development. Today, my first game \u0026quot;Awesome Zombie Sniper\u0026quot; (http://bit.ly/12PNGEM)\u0026nbsp;gets around 6,000 new players each day. Learn how to build your first game using Unity Free in this session!\u003c/p\u003e",
                        "FirstName": "Felix",
                        "LastName": "Rieseberg",
                        "SessionID": "e1d65117-1490-4c9d-b3d8-afc91ad289f1",
                        "MemberID": "2613e46e-09f3-4313-be3a-1e1a735f9cf0",
                        "Room": "ZHS 159",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Web API best practices with cool search examples",
                        "Description": "In this talk DevConnections Dev Chair Chander Dhall will not only discuss the best practices of REST API development but will also show you examples using REST API on how to create search solutions using WEB API. No background on REST or Search is necessary for this talk. You will walk in a beginner and leave as an intermediate to expert developer in REST.",
                        "Brief_Description": "In this talk DevConnections Dev Chair Chander Dhall will not only discuss the best practices of REST API development but will also show you examples using REST API on how to create search solutions using WEB API.",
                        "FirstName": "Chander",
                        "LastName": "Dhall",
                        "SessionID": "65584dd2-e319-46b4-ae81-c92c3d2eafb6",
                        "MemberID": "afc63ee4-d0fa-495b-9e9c-e017fb8d9944",
                        "Room": "SSL 150",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Web API Security with OWASP Top 10",
                        "Description": "\u003cdiv\u003e\r\n\tASP.NET Web API is a framework that makes it easy to build HTTP services that reach a broad range of \u0026nbsp;clients, Web API is a key part of ASP.NET MVC 4 and the platform of choice for building RESTful services that can be accessed by a wide range of devices. ASP.NET Web API provides a simple, robust security solution of its own that fits neatly within the ASP.NET MVC programming model and secures your code without the need for SOAP, meaning that there is no limit to the range of devices that it can work with \u0026ndash; if it can understand HTTP, then it can be secured by Web API. These SOAP-less security techniques are the focus of this talk.\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tIn this presentation, we will discuss WebAPI based Authentication and Authorization, Working with SSL Preventing Cross-Site Request Forgery (CSRF) Attacks, Securing ASP.NET Web APIs, Enabling Cross-Origin Requests in Web API and OWASP Top Ten risks for 2013.\u003c/div\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tASP.NET Web API is a key part of ASP.NET MVC 4 and the platform of choice for building RESTful services that can be accessed by a wide range of devices. ASP.NET Web API provides a simple, robust security solution of its own that fits neatly within the ASP.NET MVC programming model and secures your code.\u0026nbsp;\u003c/p\u003e",
                        "FirstName": "Adnan",
                        "LastName": "Masood",
                        "SessionID": "045828af-9168-4e38-845c-9c09f4dcaadb",
                        "MemberID": "af956eab-2a17-4791-be77-0c9efac6115f",
                        "Room": "ZHS 352",
                        "Start": "\/Date(1384115400000)\/"
                    },
                    {
                        "Title": "Web Application Security with With Web Goat.NET and OWASP Top 10",
                        "Description": "\u003cp\u003e\r\n\t\u0026lt;p\u0026gt; This session is a hands-on introduction to web application security threats using the OWASP Top 10 list of potential security flaws using WebGoat.NET. Focusing on the Microsoft platform with examples in ASP.NET and ASP.NET MVC, we will go over some of the common techniques for writing secure code in the light of the OWASP Top 10 list. In this code-centric talk, we will discuss the security features built into ASP.NET and MVC (e.g., cross-site request forgery tokens, secure cookies) and how to leverage them to write secure code. The web application security risks that will be covered in this presentation include injection flaws, cross-site scripting, broken authentication and session management, insecure direct object references, cross-site request forgery, security misconfiguration, insecure cryptographic storage, failure to restrict URL access, insufficient transport layer protection, and unvalidated redirects and forwards\u0026lt;/p\u0026gt;\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tThis session is a hands-on introduction to web application security threats using the OWASP Top 10 list of potential security flaws using WebGoat.NET. Focusing on the Microsoft platform with examples in ASP.NET and ASP.NET MVC, we will go over some of the common techniques for writing secure code in the light of the OWASP Top 10 list.\u003c/p\u003e",
                        "FirstName": "Adnan",
                        "LastName": "Masood",
                        "SessionID": "2ae45391-1062-4272-b8ee-6d33f34436b5",
                        "MemberID": "af956eab-2a17-4791-be77-0c9efac6115f",
                        "Room": "ZHS 352",
                        "Start": "\/Date(1384119900000)\/"
                    },
                    {
                        "Title": "Web Scraping with Node.js",
                        "Description": "\u003cp\u003e\r\n\tYou\u0026#39;ve probably noticed how certain people grab all those immediately-sold-out tickets by sniping them as soon as they\u0026#39;re on sale. Learn how to do that programmatically with Node.js! Web scraping is a sensitive topic, but it can come in very handy if websites don\u0026#39;t have a public API. Learn how to parse through HTML, extract structured data, get information that you need, and check for changes you care about.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tLearn how to parse through HTML, extract structured data, get information that you need, and check for changes you care about. All with Node.js!\u003c/p\u003e",
                        "FirstName": "Helen",
                        "LastName": "Zeng",
                        "SessionID": "9de32e8c-a917-470a-bbff-2dbcb242b9ca",
                        "MemberID": "71028ebc-347a-4921-93c9-ae5c098b2ed8",
                        "Room": "SLH 102",
                        "Start": "\/Date(1384124400000)\/"
                    },
                    {
                        "Title": "What is Parrot?",
                        "Description": "\u003cp\u003e\r\n\tWant cleaner views? Code cluttering up your views? \u0026nbsp;In this session I\u0026#39;ll be talking about my new view engine, Parrot.\u003cbr /\u003e\r\n\tParrot strives to remove code from your views. This hopes to result in cleaner, easier to maintain views.\u003cbr /\u003e\r\n\tBy the end of this talk, you\u0026#39;ll be able to understand the parrot syntax as well as use Parrot in your mvc apps.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tWant cleaner views? Code cluttering up your views? \u0026nbsp;In this session I\u0026#39;ll be talking about my new view engine, Parrot.\u003c/p\u003e",
                        "FirstName": "Ben",
                        "LastName": "Dornis",
                        "SessionID": "a338e285-0b26-42ba-a3ea-444d740bec47",
                        "MemberID": "2453debd-fc7e-4bb5-b657-b0bd31041e95",
                        "Room": "ZHS 163",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Write once, deploy to multiple mobile platforms",
                        "Description": "\u003cp\u003e\r\n\tCreating mobile apps is tough enough. Now try supporting a native look and feel for the top mobile platforms (iOS, Andorid, Windows 8). This session will show you how HTML5 and JavaScript can create cross-platform and native-style apps with ease. You\u0026#39;ll see PhoneJS, ChartJS, and PhoneGap in action.\u003c/p\u003e",
                        "Brief_Description": "\u003cp\u003e\r\n\tCreating mobile apps is tough enough. Now try supporting a native look and feel for the top mobile platforms (iOS, Andorid, Windows 8). This session will show you how HTML5 and JavaScript can create cross-platform and native-style apps with ease. You\u0026#39;ll see PhoneJS, ChartJS, and PhoneGap in action.\u003c/p\u003e",
                        "FirstName": "Mehul",
                        "LastName": "Harry",
                        "SessionID": "d374980b-00b2-4104-a541-bbe42dde02e8",
                        "MemberID": "a8742292-35b6-4c0d-83e8-aec6cd1deaa2",
                        "Room": "WPH 206",
                        "Start": "\/Date(1384020000000)\/"
                    },
                    {
                        "Title": "Your First Windows 8 App",
                        "Description": "\u003cdiv\u003e\r\n\tYou want to build a Windows 8 app, but have minimal (to no) experience? Katherine \u0026amp; Christine will teach you!\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tJoin them as they introduce you to the basics and more!\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tThey will be using Windows 8.1, Visual Studio 2013 RC, and XAML/C#.\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tYou want to build a Windows 8 app, but have minimal (to no) experience? Christine \u0026amp; Katherine will teach you!\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tJoin them as they introduce you to the basics and more!\u003c/div\u003e",
                        "FirstName": "Katherine",
                        "LastName": "Harris",
                        "SessionID": "c6de0116-25ed-42fd-b356-c8131f923866",
                        "MemberID": "19053396-afd8-41de-986c-bd08bb5df680",
                        "Room": "ZHS 252",
                        "Start": "\/Date(1384107300000)\/"
                    },
                    {
                        "Title": "Your First Windows 8 App",
                        "Description": "\u003cdiv\u003e\r\n\tYou want to build a Windows 8 app, but have minimal (to no) experience? Katherine \u0026amp; Christine will teach you!\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tJoin them as they introduce you to the basics and more!\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tThey will be using Windows 8.1, Visual Studio 2013 RC, and XAML/C#.\u003c/div\u003e",
                        "Brief_Description": "\u003cdiv\u003e\r\n\tYou want to build a Windows 8 app, but have minimal (to no) experience? Christine \u0026amp; Katherine will teach you!\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\t\u0026nbsp;\u003c/div\u003e\r\n\u003cdiv\u003e\r\n\tJoin them as they introduce you to the basics and more!\u003c/div\u003e",
                        "FirstName": "Christine",
                        "LastName": "Matheney",
                        "SessionID": "c6de0116-25ed-42fd-b356-c8131f923866",
                        "MemberID": "f4521f12-40fa-4cbb-ae7e-f0b66a165849",
                        "Room": "ZHS 252",
                        "Start": "\/Date(1384107300000)\/"
                    }
                ];
            }

            function getPresenters() {
                return [
                    {
                        "LastName": " Jína",
                        "FirstName": "Vojta",
                        "MemberID": "b9f46598-f0d2-481f-8872-ef42ae547d90",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Alagarsamy",
                        "FirstName": "Indu",
                        "MemberID": "7b87cf73-692c-4922-b57c-bbb9d572f1c3",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Aminnia",
                        "FirstName": "Ben",
                        "MemberID": "ffd08423-584b-47ce-a3e2-79cb35d0fe42",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Bakir",
                        "FirstName": "Ahmed",
                        "MemberID": "b38728ae-e97c-45e8-a122-63d7f16d9795",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Bearman",
                        "FirstName": "Steve",
                        "MemberID": "6672ee74-ee34-48a2-b309-d4fcb68f5759",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Bonacci, MBA, PMP, CSM",
                        "FirstName": "Victor",
                        "MemberID": "4e330ec1-850d-43d7-892e-521accbccc0a",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Braganca",
                        "FirstName": "Joao",
                        "MemberID": "e8c3b426-077f-4ff6-aa54-dba9d936759c",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Carr",
                        "FirstName": "David",
                        "MemberID": "6d8c18f8-80f5-490a-b710-8c33fcadd5ea",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Chan",
                        "FirstName": "Kai",
                        "MemberID": "9884d65b-7655-4bea-8515-cdd273cfbe18",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Chen",
                        "FirstName": "Li",
                        "MemberID": "9682e5d8-0e73-445e-92a3-2fe37cefdb7f",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Chuvyrov",
                        "FirstName": "Eugene",
                        "MemberID": "107345f4-0230-401e-aca8-9ceb5bdd3385",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Collins",
                        "FirstName": "Justin",
                        "MemberID": "021e7ff5-c64b-4e36-92e7-bb64c7257866",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Counts",
                        "FirstName": "Jim",
                        "MemberID": "240814a4-0901-4b91-824f-d4ee66e49399",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Davarnia",
                        "FirstName": "Rob",
                        "MemberID": "d420524c-4f5d-4e8d-9206-5f2a9e3904ad",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Dhall",
                        "FirstName": "Chander",
                        "MemberID": "afc63ee4-d0fa-495b-9e9c-e017fb8d9944",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Dornis",
                        "FirstName": "Ben",
                        "MemberID": "2453debd-fc7e-4bb5-b657-b0bd31041e95",
                        "TotalSessions": 3
                    },
                    {
                        "LastName": "Evans",
                        "FirstName": "Steve",
                        "MemberID": "c65e2d54-68e4-47e9-93e2-a529c6b6889a",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Falco",
                        "FirstName": "Llewellyn",
                        "MemberID": "7a171ffa-add1-4447-a1a5-b7c84f2452ae",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Gadkari",
                        "FirstName": "Abhijit",
                        "MemberID": "56feb21e-356d-4909-bfc3-8cc361865e93",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Halperin",
                        "FirstName": "Nuri",
                        "MemberID": "b0f28df5-d0f9-462a-b143-d9ab3d1fdd22",
                        "TotalSessions": 3
                    },
                    {
                        "LastName": "Harris",
                        "FirstName": "Katherine",
                        "MemberID": "19053396-afd8-41de-986c-bd08bb5df680",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Harry",
                        "FirstName": "Mehul",
                        "MemberID": "a8742292-35b6-4c0d-83e8-aec6cd1deaa2",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Hernandez",
                        "FirstName": "Mario",
                        "MemberID": "f26a2094-3b0a-4bc9-9fee-4d1e6c169da6",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Hernandez",
                        "FirstName": "Vincent",
                        "MemberID": "49afc4b3-1847-4404-9417-9e36105e6b27",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Homan",
                        "FirstName": "Sven",
                        "MemberID": "3df639b7-da84-4377-85cf-a7de4597ea01",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Karcher",
                        "FirstName": "Andrew",
                        "MemberID": "4de1d41e-f859-4066-b644-bc1f0336e3c6",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Kohlenberger",
                        "FirstName": "Steve",
                        "MemberID": "c99ba97d-b492-4684-94f1-8ac9934e50b4",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Krasowski",
                        "FirstName": "Michael",
                        "MemberID": "c312a2d5-93c7-439e-a484-fbdece8f84a4",
                        "TotalSessions": 3
                    },
                    {
                        "LastName": "Kuhn",
                        "FirstName": "John",
                        "MemberID": "40c86e55-bbc1-4cc0-8ce4-cf4ebc883a22",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Lakey",
                        "FirstName": "Lance",
                        "MemberID": "2e958300-ece5-47d8-bd56-e92eb79bf31f",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Latta",
                        "FirstName": "Zach",
                        "MemberID": "fe04cb97-38f7-4702-96b0-577d5069afc1",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Lau",
                        "FirstName": "Jonathan",
                        "MemberID": "e2734d99-eb90-4757-ac77-4cca1c44a09f",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Lee",
                        "FirstName": "Henry",
                        "MemberID": "a57742c8-2d27-469f-8c02-a1614830763b",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Lewis",
                        "FirstName": "Daniel",
                        "MemberID": "5af322ad-bb66-4f5c-835c-227a4c3d1a7c",
                        "TotalSessions": 4
                    },
                    {
                        "LastName": "Lindquist",
                        "FirstName": "John",
                        "MemberID": "5beca451-5bdb-42ba-84a7-b23792b66d43",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Masood",
                        "FirstName": "Adnan",
                        "MemberID": "af956eab-2a17-4791-be77-0c9efac6115f",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Matatall",
                        "FirstName": "Neil",
                        "MemberID": "a7422359-8b78-42d6-bf5a-45634f869272",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Matheney",
                        "FirstName": "Christine",
                        "MemberID": "f4521f12-40fa-4cbb-ae7e-f0b66a165849",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "McKinney",
                        "FirstName": "George",
                        "MemberID": "68f6a98c-60fd-46b2-9b0d-0d0c8f408d5d",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Miles",
                        "FirstName": "Troy",
                        "MemberID": "d05cc68f-3107-42a6-8e33-4d0a7b1543e4",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Miller",
                        "FirstName": "Ian",
                        "MemberID": "371c1631-3e71-4ea3-bf4b-b5156cbd4c09",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Motte",
                        "FirstName": "Scott",
                        "MemberID": "8046e4f6-e2e4-46c3-8820-67875ff0541d",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Mullen",
                        "FirstName": "Nicholas",
                        "MemberID": "b534bf75-537c-47a1-9eb8-2bcc66355b58",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Ossou",
                        "FirstName": "Michael",
                        "MemberID": "6ceebd66-cc5b-4083-845b-1a4fb9bfb235",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Paulus",
                        "FirstName": "Tom",
                        "MemberID": "1c45aea5-99d9-4d3b-be2d-e81873a0052d",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Paulus",
                        "FirstName": "Wolf",
                        "MemberID": "1536b3d7-95a8-48ba-9081-7b29ed5776a9",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Pewitt",
                        "FirstName": "Woody",
                        "MemberID": "73c8931d-0fd4-43be-84d8-928af6ca55e4",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Rader",
                        "FirstName": "Devin",
                        "MemberID": "1fcaf40f-7d88-4aad-803a-3b5d61c7108f",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Rieseberg",
                        "FirstName": "Felix",
                        "MemberID": "2613e46e-09f3-4313-be3a-1e1a735f9cf0",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Riley",
                        "FirstName": "David",
                        "MemberID": "5ebc1468-a9f6-4835-8cf8-a7b61f28d79f",
                        "TotalSessions": 4
                    },
                    {
                        "LastName": "Roth",
                        "FirstName": "Mike",
                        "MemberID": "8df92521-efe7-4f68-91e5-d023881ac62f",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Salazar",
                        "FirstName": "William",
                        "MemberID": "d9d72c83-ce11-499c-b0de-f03407d848f0",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Sheriff",
                        "FirstName": "Paul",
                        "MemberID": "a446c7d7-75ac-4807-a591-d1dba16c1956",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Shobokshi",
                        "FirstName": "Hattan",
                        "MemberID": "0826193e-c1fe-463c-a1ec-a21d5fd60936",
                        "TotalSessions": 4
                    },
                    {
                        "LastName": "Stateham",
                        "FirstName": "Bret",
                        "MemberID": "b0a8ffd5-38c9-41d8-bdb0-f63033a8b242",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Strimple",
                        "FirstName": "Timothy",
                        "MemberID": "3be2a6ae-f037-4a73-98ff-0fc09ecb7bb9",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Surguy",
                        "FirstName": "Maks",
                        "MemberID": "f17b2c9d-0e1f-4859-8752-aeab1520f11b",
                        "TotalSessions": 2
                    },
                    {
                        "LastName": "Thuleen",
                        "FirstName": "Rob",
                        "MemberID": "2e4acf5d-e419-4956-b7ca-d3cdd112727f",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Tuliper",
                        "FirstName": "Adam",
                        "MemberID": "258ad583-42f1-41d7-ba07-8faef429156a",
                        "TotalSessions": 4
                    },
                    {
                        "LastName": "Villa",
                        "FirstName": "Art",
                        "MemberID": "a8f5c70b-27b9-40e3-825a-1a92acf824f1",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Vincent",
                        "FirstName": "Mike",
                        "MemberID": "73be5f05-b856-48fa-909d-d7e545fcc29e",
                        "TotalSessions": 3
                    },
                    {
                        "LastName": "Wang",
                        "FirstName": "CJ",
                        "MemberID": "39659d00-e898-426f-a8c0-25bda69a9471",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Washington",
                        "FirstName": "Michael",
                        "MemberID": "3b7f6a92-3417-43e0-93a4-5f4e02fd9d99",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Weiler",
                        "FirstName": "Justin",
                        "MemberID": "a7c1d91c-b3f1-4d2f-96d9-77f4ac997231",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "White",
                        "FirstName": "Jim",
                        "MemberID": "1c609fd1-48c9-45f7-b4be-2918d5fa0d39",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Winters",
                        "FirstName": "Nick",
                        "MemberID": "9cdd31b4-3e31-4d5b-ab2d-a773ebc74ce9",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Wolf",
                        "FirstName": "Patrick",
                        "MemberID": "636d2102-b775-4da3-9d32-7bf503602a77",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Yoder",
                        "FirstName": "Dan",
                        "MemberID": "87c28bc7-b99d-49b3-b2e3-6a45d9bef62d",
                        "TotalSessions": 1
                    },
                    {
                        "LastName": "Zeng",
                        "FirstName": "Helen",
                        "MemberID": "71028ebc-347a-4921-93c9-ae5c098b2ed8",
                        "TotalSessions": 1
                    }
                ];
            }
        }]);
}());