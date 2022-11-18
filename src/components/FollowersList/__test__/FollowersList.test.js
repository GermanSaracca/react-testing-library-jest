import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FollowersList from "../FollowersList"

jest.mock("axios",() => ({

    __esModule: true,

    default: {
        get: () => ({
            data: {
                results: [
                    {
                        "gender": "female",
                        "name": {
                            "title": "Ms",
                            "first": "Elcke",
                            "last": "Spijkers"
                        },
                        "location": {
                            "street": {
                                "number": 1440,
                                "name": "Hartenveld"
                            },
                            "city": "Ten Boer",
                            "state": "Overijssel",
                            "country": "Netherlands",
                            "postcode": "5574 XX",
                            "coordinates": {
                                "latitude": "35.5142",
                                "longitude": "112.7925"
                            },
                            "timezone": {
                                "offset": "0:00",
                                "description": "Western Europe Time, London, Lisbon, Casablanca"
                            }
                        },
                        "email": "elcke.spijkers@example.com",
                        "login": {
                            "uuid": "3ad72adb-7c47-49d0-af14-bb014f8a4efd",
                            "username": "crazyostrich754",
                            "password": "abgrtyu",
                            "salt": "WrEM3az7",
                            "md5": "e3d85b34e3f3df2114f4b8192898342f",
                            "sha1": "ecf95ead8630321fad0a2737d0c95a956261c63c",
                            "sha256": "a27d5e82d0b7ee574b73638264ea253786e166f36ac5e3404f2f0caceac6b263"
                        },
                        "dob": {
                            "date": "1945-07-04T18:51:36.744Z",
                            "age": 77
                        },
                        "registered": {
                            "date": "2004-03-25T07:28:19.775Z",
                            "age": 18
                        },
                        "phone": "(095) 6299873",
                        "cell": "(06) 95753030",
                        "id": {
                            "name": "BSN",
                            "value": "91542141"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/25.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
                        },
                        "nat": "NL"
                    },
                    {
                        "gender": "male",
                        "name": {
                            "title": "Mr",
                            "first": "Torstein",
                            "last": "Rokne"
                        },
                        "location": {
                            "street": {
                                "number": 3551,
                                "name": "Vahls gate"
                            },
                            "city": "Sogndalsfjøra",
                            "state": "Finnmark - Finnmárku",
                            "country": "Norway",
                            "postcode": "1721",
                            "coordinates": {
                                "latitude": "44.0810",
                                "longitude": "-71.8412"
                            },
                            "timezone": {
                                "offset": "-10:00",
                                "description": "Hawaii"
                            }
                        },
                        "email": "torstein.rokne@example.com",
                        "login": {
                            "uuid": "f6fe0a6e-64f8-4b95-850e-197327298c6e",
                            "username": "brownpeacock259",
                            "password": "mangos",
                            "salt": "TyWs0O2Z",
                            "md5": "ae072ac54c010b9e306f2973ea84df16",
                            "sha1": "f40b42ee151781933a8a846465e0343f9c793b08",
                            "sha256": "c3934b21babb44ec5eb0f54eb4ca7b9d59de1c510ec4e477cea6da57dfde9461"
                        },
                        "dob": {
                            "date": "2000-11-02T07:27:31.070Z",
                            "age": 22
                        },
                        "registered": {
                            "date": "2011-02-17T07:36:31.607Z",
                            "age": 11
                        },
                        "phone": "25550421",
                        "cell": "97479683",
                        "id": {
                            "name": "FN",
                            "value": "02110084121"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/men/21.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
                        },
                        "nat": "NO"
                    },
                    {
                        "gender": "female",
                        "name": {
                            "title": "Mrs",
                            "first": "Tania",
                            "last": "Puente"
                        },
                        "location": {
                            "street": {
                                "number": 4422,
                                "name": "Pasaje Sur Velasco"
                            },
                            "city": "Tlahuelilpan",
                            "state": "Colima",
                            "country": "Mexico",
                            "postcode": 52132,
                            "coordinates": {
                                "latitude": "74.6283",
                                "longitude": "77.4998"
                            },
                            "timezone": {
                                "offset": "+7:00",
                                "description": "Bangkok, Hanoi, Jakarta"
                            }
                        },
                        "email": "tania.puente@example.com",
                        "login": {
                            "uuid": "4ea15eb4-5b6c-44fa-9d94-b2f731988164",
                            "username": "purpleswan676",
                            "password": "jammer",
                            "salt": "L8lj4ONP",
                            "md5": "be89c22bf1b125df3e78ef59936f7bfc",
                            "sha1": "71b8a29c153331550abdbba47ec8c1850225b05b",
                            "sha256": "f4c0360045272b5449e71a5c6920b8d1a42369f0ae905a2fc3e4894704b42ea4"
                        },
                        "dob": {
                            "date": "1971-10-16T02:22:07.943Z",
                            "age": 51
                        },
                        "registered": {
                            "date": "2007-10-07T19:57:06.651Z",
                            "age": 15
                        },
                        "phone": "(655) 579 2809",
                        "cell": "(611) 937 6159",
                        "id": {
                            "name": "NSS",
                            "value": "67 40 06 0023 2"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/20.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
                        },
                        "nat": "MX"
                    },
                    {
                        "gender": "female",
                        "name": {
                            "title": "Miss",
                            "first": "Samantha",
                            "last": "Harris"
                        },
                        "location": {
                            "street": {
                                "number": 2760,
                                "name": "Peachgrove Road"
                            },
                            "city": "Auckland",
                            "state": "Otago",
                            "country": "New Zealand",
                            "postcode": 65557,
                            "coordinates": {
                                "latitude": "-70.1665",
                                "longitude": "94.4623"
                            },
                            "timezone": {
                                "offset": "-4:00",
                                "description": "Atlantic Time (Canada), Caracas, La Paz"
                            }
                        },
                        "email": "samantha.harris@example.com",
                        "login": {
                            "uuid": "c7bfbd55-3abe-4b9d-bae4-79f22eaaa7ad",
                            "username": "lazypeacock903",
                            "password": "harvey",
                            "salt": "YhgNlMg6",
                            "md5": "9183fe34e13ab886874f90191e6767b6",
                            "sha1": "e238e863cbf92d944f6d1e9196fdd36d04cfce79",
                            "sha256": "53fcef6083324a78b267106a5630e9cf9147a30550a681cffd36a22bc571555f"
                        },
                        "dob": {
                            "date": "1948-10-26T02:17:24.694Z",
                            "age": 74
                        },
                        "registered": {
                            "date": "2006-04-08T04:47:26.400Z",
                            "age": 16
                        },
                        "phone": "(871)-580-0477",
                        "cell": "(151)-836-0700",
                        "id": {
                            "name": "",
                            "value": null
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/38.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
                        },
                        "nat": "NZ"
                    },
                    {
                        "gender": "female",
                        "name": {
                            "title": "Mrs",
                            "first": "Mira",
                            "last": "Katić"
                        },
                        "location": {
                            "street": {
                                "number": 7560,
                                "name": "Seljina"
                            },
                            "city": "Babušnica",
                            "state": "Jablanica",
                            "country": "Serbia",
                            "postcode": 28762,
                            "coordinates": {
                                "latitude": "25.2849",
                                "longitude": "-7.8622"
                            },
                            "timezone": {
                                "offset": "+8:00",
                                "description": "Beijing, Perth, Singapore, Hong Kong"
                            }
                        },
                        "email": "mira.katic@example.com",
                        "login": {
                            "uuid": "43888bf3-c0f2-42f5-8a29-f9c700a00463",
                            "username": "redswan646",
                            "password": "checkers",
                            "salt": "4j9LE5WI",
                            "md5": "9880868fb9ecfaea6f26a8dbfdde8cf2",
                            "sha1": "770e5f72ffe51499dbc8d0504da6e706eaaae3fe",
                            "sha256": "0ab0bcc74297ed6fe068a793f8f9442bbbce8442df27dc6329e429eddf9b9fe9"
                        },
                        "dob": {
                            "date": "1947-09-23T18:20:47.024Z",
                            "age": 75
                        },
                        "registered": {
                            "date": "2017-02-27T22:24:40.507Z",
                            "age": 5
                        },
                        "phone": "012-6431-252",
                        "cell": "061-5689-785",
                        "id": {
                            "name": "SID",
                            "value": "071133495"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/24.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
                        },
                        "nat": "RS"
                    }
                ],
                info: {
                    "seed": "0f01bb15e96c7adb",
                    "results": 5,
                    "page": 1,
                    "version": "1.4"
                }
            }
        })
    }
}))


const MockedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    it("renders first follower card", async () => {

        render(<MockedFollowersList/>)

        const followerCardDiv = await screen.findByTestId("follower-item-0")

        expect(followerCardDiv).toBeInTheDocument();

    })

    it("renders 5 followers card", async () => {

        render(<MockedFollowersList/>)

        const followersCardDivs = await screen.findAllByTestId(/follower-item/i)

        expect(followersCardDivs.length).toBe(5)

    })


} )