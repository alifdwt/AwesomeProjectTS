import FollowAPI from "../types/FollowListAPI";

const followsDummy: FollowAPI[] = [
  {
    id: 1,
    created_at: "2023-10-31T03:24:38.018Z",
    updated_at: "2023-10-31T03:24:38.018Z",
    follower: {
      id: 4,
      username: "spongebob123",
      full_name: "Spongebob Squarepants",
      email: "spongebob123@gmail.com",
      password: "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
      profile_description: "Bermain ubur-ubur",
      created_at: "2023-10-30T11:57:38.063Z",
      updated_at: "2023-10-30T11:57:38.063Z",
    },
    following: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
  },
  {
    id: 2,
    created_at: "2023-10-31T03:38:15.925Z",
    updated_at: "2023-10-31T03:38:15.925Z",
    follower: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
    following: {
      id: 4,
      username: "spongebob123",
      full_name: "Spongebob Squarepants",
      email: "spongebob123@gmail.com",
      password: "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
      profile_description: "Bermain ubur-ubur",
      created_at: "2023-10-30T11:57:38.063Z",
      updated_at: "2023-10-30T11:57:38.063Z",
    },
  },
  {
    id: 3,
    created_at: "2023-10-31T03:39:35.531Z",
    updated_at: "2023-10-31T03:39:35.531Z",
    follower: {
      id: 2,
      username: "davaliw",
      full_name: "David Ali Wicaksono",
      email: "davaliw@gmail.com",
      password: "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
      profile_description: "Kita hidup untuk melayani Tuhan",
      created_at: "2023-10-30T11:39:22.124Z",
      updated_at: "2023-10-30T11:39:22.124Z",
    },
    following: {
      id: 3,
      username: "nehru",
      full_name: "Nehru",
      email: "nehru@gmail.com",
      password: "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
      profile_description: "Assalmualaikum Wr. Wb.",
      created_at: "2023-10-30T11:46:43.024Z",
      updated_at: "2023-10-30T11:46:43.024Z",
    },
  },
  {
    id: 4,
    created_at: "2023-10-31T03:39:41.810Z",
    updated_at: "2023-10-31T03:39:41.810Z",
    follower: {
      id: 3,
      username: "nehru",
      full_name: "Nehru",
      email: "nehru@gmail.com",
      password: "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
      profile_description: "Assalmualaikum Wr. Wb.",
      created_at: "2023-10-30T11:46:43.024Z",
      updated_at: "2023-10-30T11:46:43.024Z",
    },
    following: {
      id: 2,
      username: "davaliw",
      full_name: "David Ali Wicaksono",
      email: "davaliw@gmail.com",
      password: "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
      profile_description: "Kita hidup untuk melayani Tuhan",
      created_at: "2023-10-30T11:39:22.124Z",
      updated_at: "2023-10-30T11:39:22.124Z",
    },
  },
  {
    id: 5,
    created_at: "2023-10-31T04:16:54.347Z",
    updated_at: "2023-10-31T04:16:54.347Z",
    follower: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
    following: {
      id: 2,
      username: "davaliw",
      full_name: "David Ali Wicaksono",
      email: "davaliw@gmail.com",
      password: "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
      profile_description: "Kita hidup untuk melayani Tuhan",
      created_at: "2023-10-30T11:39:22.124Z",
      updated_at: "2023-10-30T11:39:22.124Z",
    },
  },
  {
    id: 6,
    created_at: "2023-10-31T04:21:27.307Z",
    updated_at: "2023-10-31T04:21:27.307Z",
    follower: {
      id: 4,
      username: "spongebob123",
      full_name: "Spongebob Squarepants",
      email: "spongebob123@gmail.com",
      password: "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
      profile_description: "Bermain ubur-ubur",
      created_at: "2023-10-30T11:57:38.063Z",
      updated_at: "2023-10-30T11:57:38.063Z",
    },
    following: {
      id: 3,
      username: "nehru",
      full_name: "Nehru",
      email: "nehru@gmail.com",
      password: "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
      profile_description: "Assalmualaikum Wr. Wb.",
      created_at: "2023-10-30T11:46:43.024Z",
      updated_at: "2023-10-30T11:46:43.024Z",
    },
  },
  {
    id: 7,
    created_at: "2023-10-31T04:22:10.004Z",
    updated_at: "2023-10-31T04:22:10.004Z",
    follower: {
      id: 2,
      username: "davaliw",
      full_name: "David Ali Wicaksono",
      email: "davaliw@gmail.com",
      password: "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
      profile_description: "Kita hidup untuk melayani Tuhan",
      created_at: "2023-10-30T11:39:22.124Z",
      updated_at: "2023-10-30T11:39:22.124Z",
    },
    following: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
  },
  {
    id: 8,
    created_at: "2023-10-31T15:01:55.614Z",
    updated_at: "2023-10-31T15:01:55.614Z",
    follower: {
      id: 3,
      username: "nehru",
      full_name: "Nehru",
      email: "nehru@gmail.com",
      password: "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
      profile_description: "Assalmualaikum Wr. Wb.",
      created_at: "2023-10-30T11:46:43.024Z",
      updated_at: "2023-10-30T11:46:43.024Z",
    },
    following: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
  },
  {
    id: 9,
    created_at: "2023-11-01T01:33:03.831Z",
    updated_at: "2023-11-01T01:33:03.831Z",
    follower: {
      id: 5,
      username: "loremipsum",
      full_name: "Lorem Ipsum",
      email: "lorem@gmail.com",
      password: "$2b$10$U1BTR6x2YxpESH5Ic1r0ReKNPLMTRVaB3agGf8PYKnrnk9Dy4G.Va",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698739800/Circle/profile/loremipsum/profile_picture/loremipsum.png",
      profile_description: "Blablabla",
      created_at: "2023-10-31T08:09:58.875Z",
      updated_at: "2023-10-31T08:09:58.875Z",
    },
    following: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
  },
  {
    id: 10,
    created_at: "2023-11-01T11:04:59.581Z",
    updated_at: "2023-11-01T11:04:59.581Z",
    follower: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
    following: {
      id: 3,
      username: "nehru",
      full_name: "Nehru",
      email: "nehru@gmail.com",
      password: "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
      profile_description: "Assalmualaikum Wr. Wb.",
      created_at: "2023-10-30T11:46:43.024Z",
      updated_at: "2023-10-30T11:46:43.024Z",
    },
  },
  {
    id: 11,
    created_at: "2023-11-01T11:05:13.071Z",
    updated_at: "2023-11-01T11:05:13.071Z",
    follower: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
    following: {
      id: 1,
      username: "alifdwt",
      full_name: "Alif Putra Dewantara",
      email: "aputradewantara@gmail.com",
      password: "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
      profile_description: "Aku adalah anak gembala",
      created_at: "2023-10-30T11:29:50.822Z",
      updated_at: "2023-10-30T11:29:50.822Z",
    },
  },
  {
    id: 12,
    created_at: "2023-11-02T13:22:13.958Z",
    updated_at: "2023-11-02T13:22:13.958Z",
    follower: {
      id: 4,
      username: "spongebob123",
      full_name: "Spongebob Squarepants",
      email: "spongebob123@gmail.com",
      password: "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
      profile_description: "Bermain ubur-ubur",
      created_at: "2023-10-30T11:57:38.063Z",
      updated_at: "2023-10-30T11:57:38.063Z",
    },
    following: {
      id: 5,
      username: "loremipsum",
      full_name: "Lorem Ipsum",
      email: "lorem@gmail.com",
      password: "$2b$10$U1BTR6x2YxpESH5Ic1r0ReKNPLMTRVaB3agGf8PYKnrnk9Dy4G.Va",
      profile_picture:
        "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698739800/Circle/profile/loremipsum/profile_picture/loremipsum.png",
      profile_description: "Blablabla",
      created_at: "2023-10-31T08:09:58.875Z",
      updated_at: "2023-10-31T08:09:58.875Z",
    },
  },
];

export default followsDummy;
