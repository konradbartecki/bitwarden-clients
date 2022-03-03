import { ExportData } from "jslib-common/importers/onepasswordImporters/types/onepassword1PuxImporterTypes";

export const SanitizedExport: ExportData = {
  accounts: [
    {
      attrs: {
        accountName: "1Password Customer",
        name: "1Password Customer",
        avatar: "",
        email: "username123123123@gmail.com",
        uuid: "TRIZ3XV4JJFRXJ3BARILLTUA6E",
        domain: "https://my.1password.com/",
      },
      vaults: [
        {
          attrs: {
            uuid: "pqcgbqjxr4tng2hsqt5ffrgwju",
            desc: "Just test entries",
            avatar: "ke7i5rxnjrh3tj6uesstcosspu.png",
            name: "T's Test Vault",
            type: "U",
          },
          items: [
            {
              item: {
                uuid: "7vb6easqqfiocr6nppsza7ccvm",
                favIndex: 1,
                createdAt: 1619465029,
                updatedAt: 1636576578,
                trashed: false,
                categoryUuid: "001",
                details: {
                  loginFields: [
                    {
                      value: "huluuser@nullvalue.test",
                      id: "",
                      name: "username",
                      fieldType: "T",
                      designation: "username",
                    },
                    {
                      value: "",
                      id: "",
                      name: "password",
                      fieldType: "P",
                      designation: "password",
                    },
                  ],
                  notesPlain: "My Hulu login",
                  sections: [
                    {
                      title: "",
                      name: "Section_oqwfp7nqwhdimmlsrxz5dvrhhi",
                      fields: [
                        {
                          title: "one-time password",
                          id: "TOTP_564mvwqapphpsjetnnuovmuxum",
                          value: {
                            totp: "otpseed777",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "",
                      name: "Section_7ronhspxuoh5ch2hvbpqfbgemi",
                      fields: [
                        {
                          title: "",
                          id: "xjo5wotvgznjbs65x4scs7jbue",
                          value: {
                            date: 1637841660,
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "huluuser@nullvalue.test",
                  urls: [
                    {
                      label: "website",
                      url: "https://www.hulu.com",
                    },
                  ],
                  tags: ["movies"],
                  title: "Hulu",
                  url: "https://www.hulu.com",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "35szbzswhgeq3wyblg7odmshhu",
                favIndex: 0,
                createdAt: 1619467769,
                updatedAt: 1619467906,
                trashed: false,
                categoryUuid: "110",
                details: {
                  loginFields: [],
                  notesPlain: "My Server",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "URL",
                          id: "url",
                          value: {
                            string: "https://coolserver.nullvalue.test",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "username",
                          id: "username",
                          value: {
                            string: "frankly-notsure",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "password",
                          id: "password",
                          value: {
                            concealed: "*&YHJI87yjy78u",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Admin Console",
                      name: "admin_console",
                      fields: [
                        {
                          title: "admin console URL",
                          id: "admin_console_url",
                          value: {
                            string: "https://coolserver.nullvalue.test/admin",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "admin console username",
                          id: "admin_console_username",
                          value: {
                            string: "frankly-idontknowwhatimdoing",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "console password",
                          id: "admin_console_password",
                          value: {
                            concealed: "^%RY&^YUiju8iUYHJI(U",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Hosting Provider",
                      name: "hosting_provider_details",
                      fields: [
                        {
                          title: "name",
                          id: "name",
                          value: {
                            string: "Private Hosting Provider Inc.",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "website",
                          id: "website",
                          value: {
                            string: "https://phpi.nullvalue.test",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "support URL",
                          id: "support_contact_url",
                          value: {
                            string: "https://phpi.nullvalue.test/support",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "support phone",
                          id: "support_contact_phone",
                          value: {
                            string: "8882569382",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "frankly-notsure",
                  title: "Super Cool Server",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "zt7ejrtqyxhnrve353yo52lzra",
                favIndex: 0,
                createdAt: 1619465117,
                updatedAt: 1619465209,
                trashed: false,
                categoryUuid: "001",
                details: {
                  loginFields: [
                    {
                      value: "plexuser@nullvalue.test",
                      id: "",
                      name: "username",
                      fieldType: "T",
                      designation: "username",
                    },
                    {
                      value: "3(,B(KC7OApl*l+g0+40",
                      id: "",
                      name: "password",
                      fieldType: "P",
                      designation: "password",
                    },
                  ],
                  notesPlain: "My Plex Login",
                  sections: [
                    {
                      title: "",
                      name: "Section_26ci6jut7qdagpltaxb4wok7c4",
                      fields: [
                        {
                          title: "",
                          id: "irpvnshg5kjpkmj5jwy4xxkfom",
                          value: {
                            email: "plexuser@nullvalue.test",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "kqjvmxjkvoy6ok5lqzsxcsh7oi",
                          value: {
                            date: null,
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "u7ivhqebwe362osvjxjgz72hjq",
                          value: {
                            phone: "4565555555",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "plexuser@nullvalue.test",
                  urls: [
                    {
                      label: "website",
                      url: "https://app.plex.tv",
                    },
                  ],
                  tags: ["Movies"],
                  title: "Plex",
                  url: "https://app.plex.tv",
                  ps: 100,
                  pbe: 127.500786,
                  pgrng: true,
                },
              },
            },
            {
              item: {
                uuid: "6rveeumeacoxy6qof4wsaag5me",
                favIndex: 0,
                createdAt: 1619465875,
                updatedAt: 1619535673,
                trashed: true,
                categoryUuid: "006",
                details: {
                  loginFields: [],
                  notesPlain: "PDF Document",
                  sections: [],
                  passwordHistory: [],
                  documentAttributes: {
                    fileName: "Untitled.pdf",
                    documentId: "r4jnf46vjjgnbjn74bl452iddi",
                    decryptedSize: 14438,
                  },
                },
                overview: {
                  subtitle: "14 KB",
                  title: "PDF Document",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "u2l4sjbencvsowwjuj3dfpt73q",
                favIndex: 0,
                createdAt: 1619466056,
                updatedAt: 1619466187,
                trashed: false,
                categoryUuid: "101",
                details: {
                  loginFields: [],
                  notesPlain: "My Bank Account",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "bank name",
                          id: "bankName",
                          value: {
                            string: "Super Credit Union",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "name on account",
                          id: "owner",
                          value: {
                            string: "Cool Guy",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "type",
                          id: "accountType",
                          value: {
                            menu: "checking",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "routing number",
                          id: "routingNo",
                          value: {
                            string: "111000999",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "account number",
                          id: "accountNo",
                          value: {
                            string: "192837465918273645",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "SWIFT",
                          id: "swift",
                          value: {
                            string: "",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "IBAN",
                          id: "iban",
                          value: {
                            string: "",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "PIN",
                          id: "telephonePin",
                          value: {
                            concealed: "5555",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: true,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Branch Information",
                      name: "branchInfo",
                      fields: [
                        {
                          title: "phone",
                          id: "branchPhone",
                          value: {
                            phone: "9399399933",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "address",
                          id: "branchAddress",
                          value: {
                            string: "1 Fifth Avenue",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "sentences",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Super Credit Union",
                  tags: ["Finance"],
                  title: "Bank Account",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "ospvepl3ex2y6hjwwqwyvtf2sy",
                favIndex: 0,
                createdAt: 1619466193,
                updatedAt: 1619466276,
                trashed: false,
                categoryUuid: "102",
                details: {
                  loginFields: [],
                  notesPlain: "My Database",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "type",
                          id: "database_type",
                          value: {
                            menu: "postgresql",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "server",
                          id: "hostname",
                          value: {
                            string: "my.secret.db.server",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "port",
                          id: "port",
                          value: {
                            string: "1337",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "database",
                          id: "database",
                          value: {
                            string: "user_database",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "username",
                          id: "username",
                          value: {
                            string: "cooldbuser",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "password",
                          id: "password",
                          value: {
                            concealed: "^+kTjhLaN7wVPAhGU)*J",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "SID",
                          id: "sid",
                          value: {
                            string: "ASDIUFU-283234",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "alias",
                          id: "alias",
                          value: {
                            string: "cdbu",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "connection options",
                          id: "options",
                          value: {
                            string: "ssh",
                          },
                          indexAtSource: 8,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "my.secret.db.server",
                  title: "Database",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "a5pke7sx3yt7wve6kwyt3ocjrq",
                favIndex: 1,
                createdAt: 1619464754,
                updatedAt: 1619465025,
                trashed: false,
                categoryUuid: "001",
                details: {
                  loginFields: [
                    {
                      value: "netflixuser@nullvalue.test",
                      id: "",
                      name: "username",
                      fieldType: "T",
                      designation: "username",
                    },
                    {
                      value: "b6@j$Cxss(vvDTW*5i.,",
                      id: "",
                      name: "password",
                      fieldType: "P",
                      designation: "password",
                    },
                  ],
                  notesPlain: "My Netflix login",
                  sections: [],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "netflixuser@nullvalue.test",
                  urls: [
                    {
                      label: "website",
                      url: "https://www.netflix.com",
                    },
                  ],
                  title: "Netflix",
                  url: "https://www.netflix.com",
                  ps: 100,
                  pbe: 127.500786,
                  pgrng: true,
                },
              },
            },
            {
              item: {
                uuid: "nntuge2g7s2wrlokyfhea354ay",
                favIndex: 0,
                createdAt: 1619466279,
                updatedAt: 1619466425,
                trashed: false,
                categoryUuid: "103",
                details: {
                  loginFields: [],
                  notesPlain: "My Driver's License",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "full name",
                          id: "fullname",
                          value: {
                            string: "Michael Scarn",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "address",
                          id: "address",
                          value: {
                            string: "2120 Mifflin Rd.",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "sentences",
                          },
                        },
                        {
                          title: "date of birth",
                          id: "birthdate",
                          value: {
                            date: 252504060,
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "sex",
                          id: "sex",
                          value: {
                            gender: "male",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "height",
                          id: "height",
                          value: {
                            string: "5'11\"",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "number",
                          id: "number",
                          value: {
                            string: "12345678901",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "license class",
                          id: "class",
                          value: {
                            string: "C",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "conditions / restrictions",
                          id: "conditions",
                          value: {
                            string: "B",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "state",
                          id: "state",
                          value: {
                            string: "Pennsylvania",
                          },
                          indexAtSource: 8,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "country",
                          id: "country",
                          value: {
                            string: "United States",
                          },
                          indexAtSource: 9,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expiry date",
                          id: "expiry_date",
                          value: {
                            monthYear: 203012,
                          },
                          indexAtSource: 10,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "12345678901",
                  title: "Michael Scarn",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "p3hohdgwpt4u2ra2fc3tvzomsm",
                favIndex: 0,
                createdAt: 1619466428,
                updatedAt: 1619466585,
                trashed: false,
                categoryUuid: "111",
                details: {
                  loginFields: [],
                  notesPlain: "My Email Config",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "type",
                          id: "pop_type",
                          value: {
                            menu: "either",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "username",
                          id: "pop_username",
                          value: {
                            string: "mscottscarn@nullvalue.test",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "server",
                          id: "pop_server",
                          value: {
                            string: "mailserver.nullvalue.test",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "port number",
                          id: "pop_port",
                          value: {
                            string: "587",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "password",
                          id: "pop_password",
                          value: {
                            concealed: "uajsf*UI*&YU&^T",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "security",
                          id: "pop_security",
                          value: {
                            menu: "TLS",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "auth method",
                          id: "pop_authentication",
                          value: {
                            menu: "kerberos_v5",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "SMTP",
                      name: "SMTP",
                      fields: [
                        {
                          title: "SMTP server",
                          id: "smtp_server",
                          value: {
                            string: "mailserver.nullvalue.test",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "port number",
                          id: "smtp_port",
                          value: {
                            string: "589",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "username",
                          id: "smtp_username",
                          value: {
                            string: "mscottscarn@nullvalue.test",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "password",
                          id: "smtp_password",
                          value: {
                            concealed: "(*UJUTT%^UIUJ*UI(IUI8u98uyy",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "security",
                          id: "smtp_security",
                          value: {
                            menu: "TLS",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "auth method",
                          id: "smtp_authentication",
                          value: {
                            menu: "password",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Contact Information",
                      name: "Contact Information",
                      fields: [
                        {
                          title: "provider",
                          id: "provider",
                          value: {
                            string: "Telum",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "provider's website",
                          id: "provider_website",
                          value: {
                            string: "https://telum.nullvalue.test",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "phone (local)",
                          id: "phone_local",
                          value: {
                            string: "2346666666",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "phone (toll free)",
                          id: "phone_tollfree",
                          value: {
                            string: "18005557777",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "mscottscarn@nullvalue.test",
                  title: "Email Config",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "47hvppiuwbanbza7bq6jpdjfxu",
                favIndex: 1,
                createdAt: 1619467985,
                updatedAt: 1619468230,
                trashed: false,
                categoryUuid: "100",
                details: {
                  loginFields: [],
                  notesPlain: "My Software License",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "version",
                          id: "product_version",
                          value: {
                            string: "5.10.1000",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "license key",
                          id: "reg_code",
                          value: {
                            string: "265453-13457355-847327",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: true,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Customer",
                      name: "customer",
                      fields: [
                        {
                          title: "licensed to",
                          id: "reg_name",
                          value: {
                            string: "Kay Riddler",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "registered email",
                          id: "reg_email",
                          value: {
                            email: "kriddler@nullvalue.test",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "emailAddress",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "company",
                          id: "company",
                          value: {
                            string: "Riddles and Jigsaw Puzzles GmbH",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                      ],
                    },
                    {
                      title: "Publisher",
                      name: "publisher",
                      fields: [
                        {
                          title: "download page",
                          id: "download_link",
                          value: {
                            url: "https://limuxcompany.nullvalue.test/5.10.1000/isos",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "publisher",
                          id: "publisher_name",
                          value: {
                            string: "Limux Software and Hardware",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "website",
                          id: "publisher_website",
                          value: {
                            url: "https://limuxcompany.nullvalue.test/",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "retail price",
                          id: "retail_price",
                          value: {
                            string: "$999",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "support email",
                          id: "support_email",
                          value: {
                            email: "support@nullvalue.test",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Order",
                      name: "order",
                      fields: [
                        {
                          title: "purchase date",
                          id: "order_date",
                          value: {
                            date: 1617278460,
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "order number",
                          id: "order_number",
                          value: {
                            string: "594839",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "order total",
                          id: "order_total",
                          value: {
                            string: "$1086.59",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "5.10.1000",
                  title: "Limux Product Key",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "hffila4ew2e3krfzp2tkdkdmea",
                favIndex: 0,
                createdAt: 1619467498,
                updatedAt: 1619467655,
                trashed: false,
                categoryUuid: "106",
                details: {
                  loginFields: [],
                  notesPlain: "My Passport",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "type",
                          id: "type",
                          value: {
                            string: "US Passport",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "allCharacters",
                          },
                        },
                        {
                          title: "issuing country",
                          id: "issuing_country",
                          value: {
                            string: "United States of America",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "number",
                          id: "number",
                          value: {
                            string: "76436847",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "full name",
                          id: "fullname",
                          value: {
                            string: "David Global",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "sex",
                          id: "sex",
                          value: {
                            gender: "female",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "nationality",
                          id: "nationality",
                          value: {
                            string: "International",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "issuing authority",
                          id: "issuing_authority",
                          value: {
                            string: "Department of State",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "date of birth",
                          id: "birthdate",
                          value: {
                            date: 418046460,
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "place of birth",
                          id: "birthplace",
                          value: {
                            string: "A cave somewhere in Maine",
                          },
                          indexAtSource: 8,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "issued on",
                          id: "issue_date",
                          value: {
                            date: 1577880060,
                          },
                          indexAtSource: 9,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expiry date",
                          id: "expiry_date",
                          value: {
                            date: 2524651260,
                          },
                          indexAtSource: 10,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "76436847",
                  tags: ["Travel"],
                  title: "Mr. Globewide",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "6fb73t5lk7vc52h3osw3ccmguy",
                favIndex: 0,
                createdAt: 1619467374,
                updatedAt: 1619467492,
                trashed: false,
                categoryUuid: "104",
                details: {
                  loginFields: [],
                  notesPlain: "My Outdoor License",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "full name",
                          id: "name",
                          value: {
                            string: "Cash Bandit",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "valid from",
                          id: "valid_from",
                          value: {
                            date: 1617278460,
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expires",
                          id: "expires",
                          value: {
                            date: 2343124860,
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "approved wildlife",
                          id: "game",
                          value: {
                            string: "Bananas,blueberries,corn",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "maximum quota",
                          id: "quota",
                          value: {
                            string: "100/each",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "state",
                          id: "state",
                          value: {
                            string: "Washington",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "country",
                          id: "country",
                          value: {
                            string: "United States of America",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Cash Bandit",
                  title: "Harvest License",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "qpdsrgpngzud3x3rbfvyrz3ane",
                favIndex: 0,
                createdAt: 1619465796,
                updatedAt: 1619465869,
                trashed: false,
                categoryUuid: "005",
                details: {
                  loginFields: [],
                  notesPlain: "",
                  sections: [],
                  passwordHistory: [],
                  password: "GBq[AGb]4*Si3tjwuab^",
                },
                overview: {
                  subtitle: "April 26, 2021 2:36 PM",
                  urls: [
                    {
                      label: "website",
                      url: "https://n0t.y0ur.n0rm4l.w3bs1t3",
                    },
                  ],
                  title: "SuperSecret Password",
                  url: "https://n0t.y0ur.n0rm4l.w3bs1t3",
                  ps: 100,
                  pbe: 127.500786,
                  pgrng: true,
                },
              },
            },
            {
              item: {
                uuid: "3wilgt5oauovqibipjulk7vwqi",
                favIndex: 0,
                createdAt: 1619468234,
                updatedAt: 1619468316,
                trashed: false,
                categoryUuid: "109",
                details: {
                  loginFields: [],
                  notesPlain: "My Wi-Fi login",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "base station name",
                          id: "name",
                          value: {
                            string: "Super-SSID",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "base station password",
                          id: "password",
                          value: {
                            concealed: "coolpasswordadmin",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "server / IP address",
                          id: "server",
                          value: {
                            string: "10.0.0.1",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "AirPort ID",
                          id: "airport_id",
                          value: {
                            string: "airport-1D",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "network name",
                          id: "network_name",
                          value: {
                            string: "Super-SSID-name",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "wireless security",
                          id: "wireless_security",
                          value: {
                            menu: "wpa3e",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "wireless network password",
                          id: "wireless_password",
                          value: {
                            concealed: "coolpasswordbuddy",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "attached storage password",
                          id: "disk_password",
                          value: {
                            concealed: "coolpasswordbuddy",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Super-SSID-name",
                  title: "Office Wi-Fi",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "3bmrdcml3tngvsr6zdlvd2xo4i",
                favIndex: 0,
                createdAt: 1619467659,
                updatedAt: 1619467765,
                trashed: false,
                categoryUuid: "107",
                details: {
                  loginFields: [],
                  notesPlain: "My Reward Card",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "company name",
                          id: "company_name",
                          value: {
                            string: "Super Cool Store Co.",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "member name",
                          id: "member_name",
                          value: {
                            string: "Chef Coldroom",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "member ID",
                          id: "membership_no",
                          value: {
                            string: "member-29813569",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          clipboardFilter:
                            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "PIN",
                          id: "pin",
                          value: {
                            concealed: "99913",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "More Information",
                      name: "extra",
                      fields: [
                        {
                          title: "member ID (additional)",
                          id: "additional_no",
                          value: {
                            string: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "member since",
                          id: "member_since",
                          value: {
                            monthYear: null,
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "customer service phone",
                          id: "customer_service_phone",
                          value: {
                            phone: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "phone for reservations",
                          id: "reservations_phone",
                          value: {
                            phone: "",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "website",
                          id: "website",
                          value: {
                            url: "",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Super Cool Store Co.",
                  title: "Retail Reward Thing",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "vi2biozc7sjnhr5sejk74nz26i",
                favIndex: 1,
                createdAt: 1619467910,
                updatedAt: 1619467982,
                trashed: false,
                categoryUuid: "108",
                details: {
                  loginFields: [],
                  notesPlain: "My SSN",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "name",
                          id: "name",
                          value: {
                            string: "Jack Judd",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "number",
                          id: "number",
                          value: {
                            concealed: "131-216-1900",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: true,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Jack Judd",
                  title: "SSN",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "ofdp2szoty2ujk6yv5ebn4wjr4",
                favIndex: 1,
                createdAt: 1619467269,
                updatedAt: 1619467368,
                trashed: false,
                categoryUuid: "105",
                details: {
                  loginFields: [],
                  notesPlain: "My Library Card",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "group",
                          id: "org_name",
                          value: {
                            string: "National Public Library",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "website",
                          id: "website",
                          value: {
                            url: "https://npl.nullvalue.gov.test",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "telephone",
                          id: "phone",
                          value: {
                            phone: "9995555555",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "member name",
                          id: "member_name",
                          value: {
                            string: "George Engels",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "member since",
                          id: "member_since",
                          value: {
                            monthYear: 199901,
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expiry date",
                          id: "expiry_date",
                          value: {
                            monthYear: 203412,
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "member ID",
                          id: "membership_no",
                          value: {
                            string: "64783862",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "no",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "PIN",
                          id: "pin",
                          value: {
                            concealed: "19191",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "George Engels",
                  tags: ["Education"],
                  title: "Library Card",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "45mjttbbq3owgij2uis55pfrlq",
                favIndex: 0,
                createdAt: 1619465450,
                updatedAt: 1619465789,
                trashed: false,
                categoryUuid: "004",
                details: {
                  loginFields: [],
                  notesPlain: "",
                  sections: [
                    {
                      title: "Identification",
                      name: "name",
                      fields: [
                        {
                          title: "first name",
                          id: "firstname",
                          value: {
                            string: "George",
                          },
                          indexAtSource: 0,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "initial",
                          id: "initial",
                          value: {
                            string: "S",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "last name",
                          id: "lastname",
                          value: {
                            string: "Engels",
                          },
                          indexAtSource: 2,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "sex",
                          id: "sex",
                          value: {
                            menu: "male",
                          },
                          indexAtSource: 3,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "birth date",
                          id: "birthdate",
                          value: {
                            date: 347198460,
                          },
                          indexAtSource: 4,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "occupation",
                          id: "occupation",
                          value: {
                            string: "Steel Worker",
                          },
                          indexAtSource: 5,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "company",
                          id: "company",
                          value: {
                            string: "Acme Inc.",
                          },
                          indexAtSource: 6,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "department",
                          id: "department",
                          value: {
                            string: "QA",
                          },
                          indexAtSource: 7,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "job title",
                          id: "jobtitle",
                          value: {
                            string: "Quality Assurance Manager",
                          },
                          indexAtSource: 8,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                      ],
                    },
                    {
                      title: "Address",
                      name: "address",
                      fields: [
                        {
                          title: "address",
                          id: "address",
                          value: {
                            address: {
                              street: "1312 Main St.",
                              city: "Atlantis",
                              country: "us",
                              zip: "90210",
                              state: "California",
                            },
                          },
                          indexAtSource: 0,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "sentences",
                          },
                        },
                        {
                          title: "default phone",
                          id: "defphone",
                          value: {
                            phone: "4565555555",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "home",
                          id: "homephone",
                          value: {
                            phone: "4575555555",
                          },
                          indexAtSource: 2,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "cell",
                          id: "cellphone",
                          value: {
                            phone: "4585555555",
                          },
                          indexAtSource: 3,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "business",
                          id: "busphone",
                          value: {
                            phone: "4595555555",
                          },
                          indexAtSource: 4,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Internet Details",
                      name: "internet",
                      fields: [
                        {
                          title: "username",
                          id: "username",
                          value: {
                            string: "gengels",
                          },
                          indexAtSource: 0,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "reminder question",
                          id: "reminderq",
                          value: {
                            string: "Who's a super cool guy?",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "reminder answer",
                          id: "remindera",
                          value: {
                            string: "Me, buddy.",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "email",
                          id: "email",
                          value: {
                            string: "gengels@nullvalue.test",
                          },
                          indexAtSource: 3,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "emailAddress",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "website",
                          id: "website",
                          value: {
                            string: "cv.gengels.nullvalue.test",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "ICQ",
                          id: "icq",
                          value: {
                            string: "",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "skype",
                          id: "skype",
                          value: {
                            string: "skypeisbad1619",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "AOL/AIM",
                          id: "aim",
                          value: {
                            string: "aollol@lololol.aol.com",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Yahoo",
                          id: "yahoo",
                          value: {
                            string: "sk8rboi13@yah00.com",
                          },
                          indexAtSource: 8,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "MSN",
                          id: "msn",
                          value: {
                            string: "msnothankyou@msn&m&m.com",
                          },
                          indexAtSource: 9,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "forum signature",
                          id: "forumsig",
                          value: {
                            string: "super cool guy",
                          },
                          indexAtSource: 10,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "George Engels",
                  title: "George Engels",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "6nqnjdqyk5mwvqbdgbdr47oabe",
                favIndex: 0,
                createdAt: 1619465969,
                updatedAt: 1619466052,
                trashed: false,
                categoryUuid: "112",
                details: {
                  loginFields: [],
                  notesPlain: "My API Credential",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "username",
                          id: "username",
                          value: {
                            string: "apiuser@nullvalue.test",
                          },
                          indexAtSource: 0,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "none",
                          },
                        },
                        {
                          title: "credential",
                          id: "credential",
                          value: {
                            concealed: "apiapiapiapiapiapiappy",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: false,
                          dontGenerate: true,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "type",
                          id: "type",
                          value: {
                            menu: "jwt",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "filename",
                          id: "filename",
                          value: {
                            string: "filename.jwt",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "valid from",
                          id: "validFrom",
                          value: {
                            date: 1301918460,
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expires",
                          id: "expires",
                          value: {
                            date: 1932811260,
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "hostname",
                          id: "hostname",
                          value: {
                            string: "not.your.everyday.hostname",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "",
                  title: "API Credential",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "gcozv72svonjgufn4q5hnyzwmu",
                favIndex: 0,
                createdAt: 1619465226,
                updatedAt: 1619465278,
                trashed: false,
                categoryUuid: "003",
                details: {
                  loginFields: [],
                  notesPlain:
                    "This is my secure note. \n\nLorem ipsum expecto patronum. \nThe quick brown fox jumped over the lazy dog. ",
                  sections: [],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "This is my secure note. ",
                  title: "Secure Note #1",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "vpxi2esuujz7nrbojp34rd5aja",
                favIndex: 0,
                createdAt: 1619465282,
                updatedAt: 1619465447,
                trashed: false,
                categoryUuid: "002",
                details: {
                  loginFields: [],
                  notesPlain: "My parents' credit card. ",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "cardholder name",
                          id: "cardholder",
                          value: {
                            string: "Fred Engels",
                          },
                          indexAtSource: 0,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "type",
                          id: "type",
                          value: {
                            creditCardType: "discover",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "number",
                          id: "ccnum",
                          value: {
                            creditCardNumber: "1234123445676789",
                          },
                          indexAtSource: 2,
                          guarded: true,
                          clipboardFilter: "0123456789",
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "verification number",
                          id: "cvv",
                          value: {
                            concealed: "1312",
                          },
                          indexAtSource: 3,
                          guarded: true,
                          multiline: false,
                          dontGenerate: true,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "expiry date",
                          id: "expiry",
                          value: {
                            monthYear: 209912,
                          },
                          indexAtSource: 4,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "valid from",
                          id: "validFrom",
                          value: {
                            monthYear: 200101,
                          },
                          indexAtSource: 5,
                          guarded: true,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "txbzvwzpck7ejhfres3733rbpm",
                          value: {
                            string: "card",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Contact Information",
                      name: "contactInfo",
                      fields: [
                        {
                          title: "issuing bank",
                          id: "bank",
                          value: {
                            string: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "phone (local)",
                          id: "phoneLocal",
                          value: {
                            phone: "",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "phone (toll free)",
                          id: "phoneTollFree",
                          value: {
                            phone: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "phone (intl)",
                          id: "phoneIntl",
                          value: {
                            phone: "",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "namePhonePad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "website",
                          id: "website",
                          value: {
                            url: "",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Additional Details",
                      name: "details",
                      fields: [
                        {
                          title: "PIN",
                          id: "pin",
                          value: {
                            concealed: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: true,
                          inputTraits: {
                            keyboard: "numberPad",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "credit limit",
                          id: "creditLimit",
                          value: {
                            string: "$1312",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "cash withdrawal limit",
                          id: "cashLimit",
                          value: {
                            string: "$500",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "interest rate",
                          id: "interest",
                          value: {
                            string: "1%",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "issue number",
                          id: "issuenumber",
                          value: {
                            string: "",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "no",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "1234 **** 6789",
                  tags: ["Finance"],
                  title: "Parent's Credit Card",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
          ],
        },
        {
          attrs: {
            uuid: "75v3r6uejdjnan2mjzzlpjwz24",
            desc: "GYkuBJsjEZmMUuiP",
            avatar: "",
            name: "Personal",
            type: "P",
          },
          items: [
            {
              item: {
                uuid: "sxsme6jieoac2zik77gcixghyu",
                favIndex: 0,
                createdAt: 1623365944,
                updatedAt: 1623365944,
                trashed: false,
                categoryUuid: "001",
                details: {
                  loginFields: [
                    {
                      value: "",
                      id: "",
                      name: "username",
                      fieldType: "T",
                      designation: "username",
                    },
                    {
                      value: "Aguilar9396",
                      id: "",
                      name: "password",
                      fieldType: "P",
                      designation: "password",
                    },
                  ],
                  sections: [],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "—",
                  title: "cool wifi",
                  url: "",
                },
              },
            },
            {
              item: {
                uuid: "fnnva6qkqdc3bv3qte2npnz6l4",
                favIndex: 0,
                createdAt: 1577652307,
                updatedAt: 1577652307,
                trashed: false,
                categoryUuid: "109",
                details: {
                  loginFields: [],
                  notesPlain: "",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "base station name",
                          id: "name",
                          value: {
                            string: "pixel 2Xl",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "base station password",
                          id: "password",
                          value: {
                            concealed: "BqatGTVQ9TCN72tLbjrsHqkb",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "server / ip address",
                          id: "server",
                          value: {
                            string: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "airport id",
                          id: "airport_id",
                          value: {
                            string: "",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "network name",
                          id: "network_name",
                          value: {
                            string: "",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "wireless security",
                          id: "wireless_security",
                          value: {
                            menu: "",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "wireless network password",
                          id: "wireless_password",
                          value: {
                            concealed: "",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "attached storage password",
                          id: "disk_password",
                          value: {
                            concealed: "",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "",
                  title: "Wireless Router",
                  url: "",
                },
              },
            },
            {
              item: {
                uuid: "rk4jn3z3kc2lr5zegpeyn3si6q",
                favIndex: 0,
                createdAt: 1595730395,
                updatedAt: 1624728074,
                trashed: false,
                categoryUuid: "109",
                details: {
                  loginFields: [],
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "base station name",
                          id: "name",
                          value: {
                            string: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "base station password",
                          id: "password",
                          value: {
                            concealed: "10.0.0.1",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "10.0.0.1",
                          id: "server",
                          value: {
                            string: "Username: admin",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "uRL",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "airport_id",
                          value: {
                            string: "password: Password!",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Network name",
                          id: "network_name",
                          value: {
                            string: "Astroworld",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Wireless security",
                          id: "wireless_security",
                          value: {
                            menu: "",
                          },
                          indexAtSource: 5,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "wireless network password",
                          id: "wireless_password",
                          value: {
                            concealed: "Password!",
                          },
                          indexAtSource: 6,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "attached storage password",
                          id: "disk_password",
                          value: {
                            concealed: "",
                          },
                          indexAtSource: 7,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Astroworld",
                  title: "Netgear Nighthawk R6700 Chris Wifi",
                  url: "",
                },
              },
            },
            {
              item: {
                uuid: "2b3hr6p5hinr7prtrj65bwmxqu",
                favIndex: 0,
                createdAt: 1635522833,
                updatedAt: 1635522872,
                trashed: false,
                categoryUuid: "001",
                details: {
                  loginFields: [
                    {
                      value: "username123123123@gmail.com",
                      id: "",
                      name: "email",
                      fieldType: "E",
                      designation: "username",
                    },
                    {
                      value: "password!",
                      id: "",
                      name: "password",
                      fieldType: "P",
                      designation: "password",
                    },
                    {
                      value: "",
                      id: "terms",
                      name: "terms",
                      fieldType: "C",
                    },
                    {
                      value: "",
                      id: "policies",
                      name: "policies",
                      fieldType: "C",
                    },
                    {
                      value: "",
                      id: "terms",
                      name: "terms",
                      fieldType: "C",
                    },
                    {
                      value: "",
                      id: "policies",
                      name: "policies",
                      fieldType: "C",
                    },
                    {
                      value: "✓",
                      id: "terms",
                      name: "terms",
                      fieldType: "C",
                    },
                    {
                      value: "✓",
                      id: "policies",
                      name: "policies",
                      fieldType: "C",
                    },
                    {
                      value: "✓",
                      id: "terms",
                      name: "terms",
                      fieldType: "C",
                    },
                    {
                      value: "✓",
                      id: "policies",
                      name: "policies",
                      fieldType: "C",
                    },
                  ],
                  sections: [
                    {
                      title: "Saved on www.fakesite.com",
                      name: "Section_mlvk6wzoifml4rbs4c3rfu4e2a",
                      fields: [
                        {
                          title: "Create an account",
                          id: "cyqyggt2otns6tbbqtsl6w2ceu",
                          value: {
                            string: "username123123",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [
                    {
                      value: "123uio123oiu123uiopassword",
                      time: 1635522872,
                    },
                    {
                      value: "123uio123oiu123uiopassword123",
                      time: 1635522854,
                    },
                    {
                      value: "123uio123oiu123uiopassword123123",
                      time: 1635522848,
                    },
                  ],
                },
                overview: {
                  subtitle: "username123123@gmail.com",
                  urls: [
                    {
                      label: "website",
                      url: "https://www.fakesite.com",
                    },
                  ],
                  title: "eToro",
                  url: "https://www.fakesite.com",
                  ps: 54,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "doj33uc6hsstee2s5hqh275wfm",
                favIndex: 0,
                createdAt: 1607125760,
                updatedAt: 1607125765,
                trashed: false,
                categoryUuid: "100",
                details: {
                  loginFields: [],
                  notesPlain: "",
                  sections: [
                    {
                      title: "",
                      fields: [
                        {
                          title: "version",
                          id: "product_version",
                          value: {
                            string: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "license key",
                          id: "reg_code",
                          value: {
                            string: "12345-C4702-349F5-D84A1-C1FDF-54321",
                          },
                          indexAtSource: 1,
                          guarded: true,
                          multiline: true,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Customer",
                      name: "customer",
                      fields: [
                        {
                          title: "licensed to",
                          id: "reg_name",
                          value: {
                            string: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "registered email",
                          id: "reg_email",
                          value: {
                            email: "",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "emailAddress",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "company",
                          id: "company",
                          value: {
                            string: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                      ],
                    },
                    {
                      title: "Publisher",
                      name: "publisher",
                      fields: [
                        {
                          title: "download page",
                          id: "download_link",
                          value: {
                            url: "",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "publisher",
                          id: "publisher_name",
                          value: {
                            string: "",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "words",
                          },
                        },
                        {
                          title: "website",
                          id: "publisher_website",
                          value: {
                            url: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "retail price",
                          id: "retail_price",
                          value: {
                            string: "",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "support email",
                          id: "support_email",
                          value: {
                            email: "",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "Order",
                      name: "order",
                      fields: [
                        {
                          title: "purchase date",
                          id: "order_date",
                          value: {
                            date: null,
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "order number",
                          id: "order_number",
                          value: {
                            string: "",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "order total",
                          id: "order_total",
                          value: {
                            string: "",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "numbersAndPunctuation",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "",
                  title: "Cool Software",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "q6icpq5myuxzdgvmr3i6ftzv7y",
                favIndex: 0,
                createdAt: 1609647825,
                updatedAt: 1609647832,
                trashed: false,
                categoryUuid: "003",
                details: {
                  loginFields: [],
                  notesPlain: "127.0.0.1",
                  sections: [],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "127.0.0.1",
                  title: "My Public IP at Home",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
            {
              item: {
                uuid: "735xgvo264tz2e2aa5ntxa55li",
                favIndex: 0,
                createdAt: 1576938097,
                updatedAt: 1576938097,
                trashed: false,
                categoryUuid: "003",
                details: {
                  loginFields: [],
                  notesPlain: "Follow these steps to get started.",
                  sections: [
                    {
                      title: "1️⃣ Get the apps",
                      name: "rh7qsmbwg3coxaaep6ap7ibnja",
                      fields: [
                        {
                          title: "",
                          id: "2euqzmjvvpz2giexmq3nr74ykq",
                          value: {
                            url: "https://1password.com/downloads",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "3erat6swtkqrvgn2jupowcfmfq",
                          value: {
                            string: "Install 1Password everywhere you need your passwords.",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "2️⃣ Get 1Password in your browser",
                      name: "mv6y7pgablsll2rmj6nvw27yrq",
                      fields: [
                        {
                          title: "",
                          id: "3rar5ydnvvohxs3y2iamzitog4",
                          value: {
                            url: "https://1password.com/downloads/#browsers",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "e53voqcvfcimpl6eln4tis6dva",
                          value: {
                            string: "Install 1Password in your browser to save and fill passwords.",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "3️⃣ Save your first password",
                      name: "s7yxii3e3uicoitzzohmodd3dy",
                      fields: [
                        {
                          title: "",
                          id: "t4ocjyus6th2vyk5z56m3j2s3u",
                          value: {
                            string: "1. Sign in to your favorite website.",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "ch2t4nsye3uvy7njje3ezci3ya",
                          value: {
                            string: "2. 1Password will ask to save your username and password.",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "dxgfpkh3muezizrcvw3snwjqyu",
                          value: {
                            string: "3. Click Save Login.",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "4️⃣ Fill passwords and more",
                      name: "v3j54vco3cnsropojctmilhisq",
                      fields: [
                        {
                          title: "",
                          id: "uzuctewer5cpvnetlzofwoelim",
                          value: {
                            url: "https://support.1password.com/explore/extension/",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "",
                          id: "cfwwxj44dzsw2znx7lazzt7tye",
                          value: {
                            string: "Save and fill passwords, credit cards, and addresses.",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                    {
                      title: "📚 Learn 1Password",
                      name: "elzna6vbcv72x5ny63c4xfycyi",
                      fields: [
                        {
                          title: "",
                          id: "kxsxs4m4zsvrzmi3tjzqxgfoxq",
                          value: {
                            string: "Check out our videos and articles:",
                          },
                          indexAtSource: 0,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Watch videos",
                          id: "dzkl3rrp6e3xu3t2bwujunsxoi",
                          value: {
                            url: "https://youtube.com/1PasswordVideos",
                          },
                          indexAtSource: 1,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Get support",
                          id: "bgkk3lgo3rcvcmqsxlypr2t6lu",
                          value: {
                            url: "https://support.1password.com/",
                          },
                          indexAtSource: 2,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Read the blog",
                          id: "ezlrjawk7rjiq6ly4lddqjq2om",
                          value: {
                            url: "https://blog.1password.com/",
                          },
                          indexAtSource: 3,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                        {
                          title: "Contact us",
                          id: "7wgntt6xptnw5lsv5n5pk3imam",
                          value: {
                            url: "https://support.1password.com/contact-us/",
                          },
                          indexAtSource: 4,
                          guarded: false,
                          multiline: false,
                          dontGenerate: false,
                          inputTraits: {
                            keyboard: "default",
                            correction: "default",
                            capitalization: "default",
                          },
                        },
                      ],
                    },
                  ],
                  passwordHistory: [],
                },
                overview: {
                  subtitle: "Follow these steps to get started.",
                  tags: ["Starter Kit"],
                  title: "🎉 Welcome to 1Password!",
                  url: "",
                  ps: 0,
                  pbe: 0.0,
                  pgrng: false,
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
