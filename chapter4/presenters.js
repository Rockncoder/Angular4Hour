(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("PresentersCtrl", [function () {
            var vm = this;
            vm.presenters = [
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
        }]);
}());