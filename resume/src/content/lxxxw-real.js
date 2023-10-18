export const content = {
  personal_info: {
    title: "Senior Software Engineer",
    first_name: "Xiaowei",
    last_name: "Lu",
    phone: "+1 213-421-6695",
    email: "luxw929@gmail.com",
    address: "San Francisco Bay Area, California, USA",
  },
  experience: [
    {
      company: "Wepay, JPMC",
      location: {
        city: "Palo Alto",
        country: "USA",
      },
      title: "Senior Software Engineer",
      start_time: "12-13-2021",
      end_time: "Ongoing",
      bullets: [
        "Worked in compliance and onboarding infrastructure team",
        "Built microservices to construct the merchant onboarding pipeline and automatic KYC verification",
        "Refactored 12 microservices to apply Elastic Application Performance Monitoring",
      ],
    },
    {
      company: "Pure Storage",
      location: {
        city: "Mountain View",
        country: "USA",
      },
      title: "Member of Technical Staff",
      start_time: "07-09-2018",
      end_time: "12-10-2021",
      bullets: [
        "Built a distributed polling and alert system to track filesystem usage (Quotas) of NFS clients on FlashBlade",
        "Developed APIs to provide integrated functionality of netgroup support for directory servers like LDAP and NIS",
        "Designed and led the implementation of Kerberos v5 with Privacy(krb5p) support of NFSv4 on FlashBlade",
        "Drafted and implemented an optimization plan for the nested group feature to double the performance of LDAP queries",
        "All work done in <b>C++</b> or <b>Python</b>, under <b>Linux</b> environment",
      ],
    },
  ],
  education: [
    {
      name: "University of Southern California",
      location: {
        city: "Los Angeles",
        country: "USA",
      },
      degree_detail: "Master of Science, Computer Science",
      start_time: "08-01-2016",
      end_time: "06-30-2018",
    },
    {
      name: "University of California, San Diego",
      location: {
        city: "San Diego",
        country: "USA",
      },
      degree_detail: "Exchange Program, Computer Science and Engineering",
      start_time: "08-26-2015",
      end_time: "12-14-2015",
    },
    {
      name: "Huazhong University of Science and Technology",
      location: {
        city: "Wuhan",
        country: "China",
      },
      degree_detail:
        "Bachelor of Engineering, Electronic and Information Engineering",
      start_time: "09-1-2012",
      end_time: "06-30-2016",
    },
  ],
  projects: [
    {
      is_active: true,
      name: "Batman Castle",
      url: "https://www.google.com",
      start_time: "07-01-2017",
      end_time: "09-12-2017",
      caption: "I built it all by myself",
      bullets: ["ABC", "DEF"],
    },
    {
      is_active: true,
      name: "Huge Piano",
      url: "https://www.google.com",
      start_time: "07-01-2017",
      end_time: "09-12-2017",
      caption: "I built it all by myself",
      bullets: ["ABC", "DEF"],
    },
  ],
};
