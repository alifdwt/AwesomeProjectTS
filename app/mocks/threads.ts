import ThreadAPI from "../types/ThreadCardAPI";

const threadDummy: ThreadAPI[] = [
  {
    id: 33,
    content: "Selamat malam dunia!",
    image: null,
    created_at: "2023-11-05T14:25:06.079Z",
    updated_at: "2023-11-05T14:25:06.079Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 32,
    content: "Selamat pagi dunia!",
    image: null,
    created_at: "2023-11-03T03:24:42.525Z",
    updated_at: "2023-11-03T03:24:42.525Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 31,
    content: "Patrick tinggal di rumah batu #TapiBukanPenyembahBatu",
    image: null,
    created_at: "2023-11-02T06:42:26.444Z",
    updated_at: "2023-11-02T06:42:26.444Z",
    user: {
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
    replies: [
      {
        id: 16,
        content: "Halo dunia!",
        image: null,
        created_at: "2023-11-03T07:24:23.745Z",
        updated_at: "2023-11-03T07:24:23.745Z",
      },
      {
        id: 14,
        content: "Aku tetangganya Patrick",
        image: null,
        created_at: "2023-11-03T03:26:45.608Z",
        updated_at: "2023-11-03T03:26:45.608Z",
      },
    ],
    likes: [
      {
        id: 26,
        created_at: "2023-11-03T07:24:34.718Z",
        updated_at: "2023-11-03T07:24:34.718Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
    ],
  },
  {
    id: 30,
    content: "Aku cinta kedua orang tuaku!",
    image: null,
    created_at: "2023-11-02T06:40:37.673Z",
    updated_at: "2023-11-02T06:40:37.673Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 29,
    content: "Mengapa orangtuaku memberi nama dengan kreativitas rendah?",
    image: null,
    created_at: "2023-11-02T06:38:51.436Z",
    updated_at: "2023-11-02T06:38:51.436Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 28,
    content: "Apa yang dikatakan Mas Alif tentang Squidward itu benar.",
    image: null,
    created_at: "2023-11-02T06:17:59.181Z",
    updated_at: "2023-11-02T06:17:59.181Z",
    user: {
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
    replies: [
      {
        id: 1,
        content: "Begitulah hidup orang susah",
        image: null,
        created_at: "2023-11-02T16:41:38.228Z",
        updated_at: "2023-11-02T17:09:17.774Z",
      },
    ],
    likes: [
      {
        id: 19,
        created_at: "2023-11-02T08:27:19.652Z",
        updated_at: "2023-11-02T08:27:19.652Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 27,
    content: "Anda juga bisa mengedit thread",
    image: null,
    created_at: "2023-11-02T06:10:49.728Z",
    updated_at: "2023-11-02T08:16:35.709Z",
    user: {
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
    replies: [
      {
        id: 15,
        content: "Anda juga bisa menggunggah gambar di replies",
        image:
          "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698982447/Circle/profile/spongebob123/replies/1698982440224-main-qimg-b2bdf6026a0ce06cd5790443aa5ac1b6.webp.webp",
        created_at: "2023-11-03T03:34:05.282Z",
        updated_at: "2023-11-03T03:34:05.282Z",
      },
    ],
    likes: [
      {
        id: 22,
        created_at: "2023-11-02T08:50:07.438Z",
        updated_at: "2023-11-02T08:50:07.438Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 26,
    content:
      "Tahukah kamu? Squidward Tentacles bertetangga dengan Spongebob dan Patrick.",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698905279/Circle/profile/alifdwt/threads/1698905276124-squidward.jpg.jpg",
    created_at: "2023-11-02T06:08:00.376Z",
    updated_at: "2023-11-02T06:08:00.376Z",
    user: {
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
    replies: [
      {
        id: 10,
        content: "Itu benar Mas Alif",
        image: "",
        created_at: "2023-11-03T02:52:13.142Z",
        updated_at: "2023-11-03T02:52:13.142Z",
      },
    ],
    likes: [
      {
        id: 27,
        created_at: "2023-11-05T14:27:02.980Z",
        updated_at: "2023-11-05T14:27:02.980Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
      {
        id: 24,
        created_at: "2023-11-03T02:01:00.117Z",
        updated_at: "2023-11-03T02:01:00.117Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
    ],
  },
  {
    id: 25,
    content: "Lunasi hutangmu sedini mungkin",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698898708/Circle/profile/nehru/threads/1698898703339-what-is-debt-review.webp.webp",
    created_at: "2023-11-02T04:18:27.506Z",
    updated_at: "2023-11-02T04:18:27.506Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 24,
    content: "Phir milenge chalte chalte!",
    image: null,
    created_at: "2023-11-02T04:16:42.799Z",
    updated_at: "2023-11-02T04:16:42.799Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 25,
        created_at: "2023-11-03T02:02:35.589Z",
        updated_at: "2023-11-03T02:02:35.589Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
    ],
  },
  {
    id: 23,
    content: "Aku siap, aku siap!",
    image: null,
    created_at: "2023-11-01T16:12:56.622Z",
    updated_at: "2023-11-01T16:12:56.622Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 17,
        created_at: "2023-11-02T04:17:09.472Z",
        updated_at: "2023-11-02T04:17:09.472Z",
        user: {
          id: 3,
          username: "nehru",
          full_name: "Nehru",
          email: "nehru@gmail.com",
          password:
            "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
          profile_description: "Assalmualaikum Wr. Wb.",
          created_at: "2023-10-30T11:46:43.024Z",
          updated_at: "2023-10-30T11:46:43.024Z",
        },
      },
    ],
  },
  {
    id: 22,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus cursus dui eu mollis. Sed sed dui eros. Quisque ornare nibh eget suscipit luctus. Etiam nec tristique metus. Curabitur dapibus magna sed mi congue, non vestibulum nisl ornare. Quisque lorem diam, sagittis sit amet mauris nec, malesuada convallis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus dolor sed malesuada fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: null,
    created_at: "2023-11-01T15:15:39.604Z",
    updated_at: "2023-11-01T15:15:39.604Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 18,
        created_at: "2023-11-02T04:19:08.604Z",
        updated_at: "2023-11-02T04:19:08.604Z",
        user: {
          id: 3,
          username: "nehru",
          full_name: "Nehru",
          email: "nehru@gmail.com",
          password:
            "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
          profile_description: "Assalmualaikum Wr. Wb.",
          created_at: "2023-10-30T11:46:43.024Z",
          updated_at: "2023-10-30T11:46:43.024Z",
        },
      },
      {
        id: 14,
        created_at: "2023-11-01T15:39:33.489Z",
        updated_at: "2023-11-01T15:39:33.489Z",
        user: {
          id: 2,
          username: "davaliw",
          full_name: "David Ali Wicaksono",
          email: "davaliw@gmail.com",
          password:
            "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
          profile_description: "Kita hidup untuk melayani Tuhan",
          created_at: "2023-10-30T11:39:22.124Z",
          updated_at: "2023-10-30T11:39:22.124Z",
        },
      },
      {
        id: 16,
        created_at: "2023-11-01T16:13:14.213Z",
        updated_at: "2023-11-01T16:13:14.213Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
    ],
  },
  {
    id: 21,
    content: "Microsoft PowerPoint adalah aplikasi untuk presentasi",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698836884/Circle/profile/alifdwt/threads/1698836882023-powerpoint.png.png",
    created_at: "2023-11-01T11:08:05.416Z",
    updated_at: "2023-11-02T15:39:42.886Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 9,
        created_at: "2023-11-01T11:13:40.920Z",
        updated_at: "2023-11-01T11:13:40.920Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 17,
    content: "Akhirnya saya berhasil menghapus thread!",
    image: null,
    created_at: "2023-11-01T10:10:20.328Z",
    updated_at: "2023-11-01T10:10:20.328Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 15,
        created_at: "2023-11-01T16:12:06.283Z",
        updated_at: "2023-11-01T16:12:06.283Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
    ],
  },
  {
    id: 16,
    content: "Halo dunia!",
    image: null,
    created_at: "2023-10-31T15:01:45.644Z",
    updated_at: "2023-10-31T15:01:45.644Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 7,
        created_at: "2023-10-31T15:08:07.109Z",
        updated_at: "2023-10-31T15:08:07.109Z",
        user: {
          id: 3,
          username: "nehru",
          full_name: "Nehru",
          email: "nehru@gmail.com",
          password:
            "$2b$10$O4He9fYdASKEMO2l60KLD.sbpMxiFK/nifzSmfqIfgBHb5G1B6d4a",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698666403/Circle/profile/nehru/nehru.jpg",
          profile_description: "Assalmualaikum Wr. Wb.",
          created_at: "2023-10-30T11:46:43.024Z",
          updated_at: "2023-10-30T11:46:43.024Z",
        },
      },
    ],
  },
  {
    id: 15,
    content: "Apa ya gaes?",
    image: null,
    created_at: "2023-10-31T08:13:26.223Z",
    updated_at: "2023-10-31T08:13:26.223Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 8,
        created_at: "2023-11-01T06:31:23.097Z",
        updated_at: "2023-11-01T06:31:23.097Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 14,
    content: "Test123",
    image: null,
    created_at: "2023-10-31T08:10:34.474Z",
    updated_at: "2023-10-31T08:10:34.474Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 13,
    content:
      "Pada mulanya adalah firman, firman itu bersama-sama dengan Allah, dan firman itu adalah Allah",
    image: null,
    created_at: "2023-10-31T08:07:20.890Z",
    updated_at: "2023-11-02T17:07:24.195Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 12,
    content: "Hahahaha",
    image: null,
    created_at: "2023-10-31T08:02:18.604Z",
    updated_at: "2023-10-31T08:02:18.604Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 13,
        created_at: "2023-11-01T15:37:28.600Z",
        updated_at: "2023-11-01T15:37:28.600Z",
        user: {
          id: 2,
          username: "davaliw",
          full_name: "David Ali Wicaksono",
          email: "davaliw@gmail.com",
          password:
            "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
          profile_description: "Kita hidup untuk melayani Tuhan",
          created_at: "2023-10-30T11:39:22.124Z",
          updated_at: "2023-10-30T11:39:22.124Z",
        },
      },
      {
        id: 23,
        created_at: "2023-11-02T13:24:27.631Z",
        updated_at: "2023-11-02T13:24:27.631Z",
        user: {
          id: 4,
          username: "spongebob123",
          full_name: "Spongebob Squarepants",
          email: "spongebob123@gmail.com",
          password:
            "$2b$10$aXN677YP7umcHtLDiXMwnujzBZflHnS8D6N5vDNsAJHrjKmmTSQnq",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698667058/Circle/profile/spongebob123/spongebob123.jpg",
          profile_description: "Bermain ubur-ubur",
          created_at: "2023-10-30T11:57:38.063Z",
          updated_at: "2023-10-30T11:57:38.063Z",
        },
      },
      {
        id: 6,
        created_at: "2023-10-31T08:10:53.067Z",
        updated_at: "2023-10-31T08:10:53.067Z",
        user: {
          id: 5,
          username: "loremipsum",
          full_name: "Lorem Ipsum",
          email: "lorem@gmail.com",
          password:
            "$2b$10$U1BTR6x2YxpESH5Ic1r0ReKNPLMTRVaB3agGf8PYKnrnk9Dy4G.Va",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698739800/Circle/profile/loremipsum/profile_picture/loremipsum.png",
          profile_description: "Blablabla",
          created_at: "2023-10-31T08:09:58.875Z",
          updated_at: "2023-10-31T08:09:58.875Z",
        },
      },
    ],
  },
  {
    id: 11,
    content: "Kaoru Akinomoto",
    image: null,
    created_at: "2023-10-31T08:01:46.246Z",
    updated_at: "2023-10-31T08:01:46.246Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 9,
    content: "Microsoft Excel",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698736458/Circle/profile/davaliw/threads/1698736452590-exceljpg-20221122022008.jpg.jpg",
    created_at: "2023-10-31T07:14:19.694Z",
    updated_at: "2023-10-31T07:14:19.694Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 8,
    content: "Mari makan Krabby Patty! #Kenyang",
    image: null,
    created_at: "2023-10-31T07:07:09.058Z",
    updated_at: "2023-10-31T07:07:09.058Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 7,
    content: "Pada mulanya adalah firman",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698735982/Circle/profile/alifdwt/threads/1698735957133-cashondelivery.jpg.jpg",
    created_at: "2023-10-31T07:06:23.129Z",
    updated_at: "2023-10-31T07:06:23.129Z",
    user: {
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
    replies: [],
    likes: [],
  },
  {
    id: 6,
    content: "Saya ingin mengunggah gambar nih!",
    image:
      "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698718019/Circle/profile/alifdwt/threads/1698717984976-el_pesado_del_coraz%C3%A3%C2%B3n_en_el_papiro_de_hunefer.jpg.jpg",
    created_at: "2023-10-31T02:06:59.352Z",
    updated_at: "2023-10-31T02:06:59.352Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 3,
        created_at: "2023-10-31T03:15:16.743Z",
        updated_at: "2023-10-31T03:15:16.743Z",
        user: {
          id: 2,
          username: "davaliw",
          full_name: "David Ali Wicaksono",
          email: "davaliw@gmail.com",
          password:
            "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
          profile_description: "Kita hidup untuk melayani Tuhan",
          created_at: "2023-10-30T11:39:22.124Z",
          updated_at: "2023-10-30T11:39:22.124Z",
        },
      },
      {
        id: 2,
        created_at: "2023-10-31T02:49:07.613Z",
        updated_at: "2023-10-31T02:49:07.613Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 4,
    content: "Namaste!",
    image: null,
    created_at: "2023-10-31T02:02:55.589Z",
    updated_at: "2023-10-31T02:02:55.589Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 5,
        created_at: "2023-10-31T04:34:27.254Z",
        updated_at: "2023-10-31T04:34:27.254Z",
        user: {
          id: 2,
          username: "davaliw",
          full_name: "David Ali Wicaksono",
          email: "davaliw@gmail.com",
          password:
            "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
          profile_description: "Kita hidup untuk melayani Tuhan",
          created_at: "2023-10-30T11:39:22.124Z",
          updated_at: "2023-10-30T11:39:22.124Z",
        },
      },
    ],
  },
  {
    id: 3,
    content: "Ketiga bro....",
    image: null,
    created_at: "2023-10-31T01:52:03.870Z",
    updated_at: "2023-10-31T01:52:03.870Z",
    user: {
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
    replies: [],
    likes: [
      {
        id: 4,
        created_at: "2023-10-31T03:16:06.311Z",
        updated_at: "2023-10-31T03:16:06.311Z",
        user: {
          id: 2,
          username: "davaliw",
          full_name: "David Ali Wicaksono",
          email: "davaliw@gmail.com",
          password:
            "$2b$10$SfVMWvOX1EXfoW8xeZ7ciuXXyMK82L/E0N2sr/KP8Zdykz6/nNIGW",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665962/Circle/profile/davaliw/davaliw.jpg",
          profile_description: "Kita hidup untuk melayani Tuhan",
          created_at: "2023-10-30T11:39:22.124Z",
          updated_at: "2023-10-30T11:39:22.124Z",
        },
      },
      {
        id: 1,
        created_at: "2023-10-31T02:07:19.985Z",
        updated_at: "2023-10-31T02:07:19.985Z",
        user: {
          id: 1,
          username: "alifdwt",
          full_name: "Alif Putra Dewantara",
          email: "aputradewantara@gmail.com",
          password:
            "$2b$10$1qcBfJh9UC5CqQHbUCMpgOmPwtAohXgR9I9ve9uEQJRyKxkqRg8OC",
          profile_picture:
            "https://res.cloudinary.com/dxirtmo5t/image/upload/v1698665390/Circle/profile/alifdwt.jpg",
          profile_description: "Aku adalah anak gembala",
          created_at: "2023-10-30T11:29:50.822Z",
          updated_at: "2023-10-30T11:29:50.822Z",
        },
      },
    ],
  },
  {
    id: 1,
    content: "Ini adalah utas pertama Circle!",
    image: null,
    created_at: "2023-10-31T01:48:41.247Z",
    updated_at: "2023-10-31T01:48:41.247Z",
    user: {
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
    replies: [],
    likes: [],
  },
];

export default threadDummy;
