import { r as i, j as e } from "./react-CrDQUdnJ.js";
import { c as _ } from "./react-dom-BHCIuv3F.js";
import { L as E, N as O, B as K } from "./react-router-dom-B8mUcyug.js";
import {
  X as J,
  M as Z,
  I as X,
  T as $,
  G as ee,
  Y as se,
  a as ae,
  C as te,
  b as D,
  R as re,
  B as L,
  c as z,
  U as R,
  d as P,
  A as ne,
  e as le,
  f as ie,
  g as B,
  S as oe,
  P as de,
  h as ce,
  i as H,
  j as F,
  k as me,
  l as U,
  m as he,
  H as xe,
  n as ue,
  o as pe,
  N as ge,
  p as be,
  V as je,
  q as fe,
} from "./lucide-react-4TnNPptz.js";
import { L as k, y as N } from "./react-toastify-CQpxZcLx.js";
import {
  O as Ne,
  a as ye,
  e as ve,
  f as Ae,
  g as we,
  h as w,
} from "./react-router-CqBZFGFZ.js";
import { m as Q } from "./framer-motion-BQclGWOg.js";
import { a as g } from "./axios-t--hEgTQ.js";
import { f as T } from "./date-fns-sbWH3_uq.js";
import { S as Ie } from "./react-slick-IGme6gRg.js";
/* empty css                       */ /* empty css                */ import "./classnames-r5axgyEj.js";
import "./scheduler-DYLXRpC5.js";
import "./@remix-run-CRgRmv4d.js";
import "./clsx-B-dksMZM.js";
import "./motion-dom-C8PdgYBP.js";
import "./motion-utils-DBsP9okC.js";
import "./lodash.debounce-Cx665Aaa.js";
import "./resize-observer-polyfill-BWCBsnt7.js";
import "./json2mq-DXkj81uw.js";
import "./string-convert-DdSrkZLz.js";
import "./enquire.js-B8qsBZnP.js";
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) l(n);
  new MutationObserver((n) => {
    for (const t of n)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && l(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const t = {};
    return (
      n.integrity && (t.integrity = n.integrity),
      n.referrerPolicy && (t.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function l(n) {
    if (n.ep) return;
    n.ep = !0;
    const t = s(n);
    fetch(n.href, t);
  }
})();
const V = () => {
    const [a, o] = i.useState(!1);
    let s = i.useRef(),
      l = i.useRef();
    const n = [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
      { name: "Lectures", href: "/lectures" },
      { name: "Events", href: "/events" },
      { name: "Forum", href: "/forum" },
      { name: "Store", href: "/store" },
    ];
    return (
      i.useEffect(() => {
        let t = (r) => {
          !s.current.contains(r.target) && s.current && o(!1);
        };
        return (
          document.addEventListener("mousedown", t),
          () => {
            document.removeEventListener("mousedown", t);
          }
        );
      }, []),
      i.useEffect(() => {
        const t = () => {
          window.innerWidth > 1024 && o(!1);
        };
        return (
          window.addEventListener("resize", t),
          () => {
            window.removeEventListener("resize", t);
          }
        );
      }, []),
      e.jsx("div", {
        children: e.jsx("nav", {
          className: "bg-white shadow-md fixed w-full z-50",
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center h-20",
                children: [
                  e.jsxs(E, {
                    to: "/",
                    className:
                      "flex-shrink-0 flex items-center gap-x-0 sm:gap-x-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          e.jsx("img", {
                            src: "/mssn-logo.jpeg",
                            alt: "",
                            className: "w-12 h-12 rounded-full",
                          }),
                          e.jsx("img", {
                            src: "/abuad-logo.jpeg",
                            alt: "",
                            className: "w-12 h-12 rounded-full",
                          }),
                        ],
                      }),
                      e.jsx("h1", {
                        className:
                          "hidden sm:block text-2xl font-bold text-primary",
                        children: "MSSN ABUAD",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "hidden lg:flex gap-x-8",
                    children: [
                      e.jsx("div", {
                        className: "ml-10 flex items-center space-x-6",
                        children: n.map((t) =>
                          e.jsx(
                            O,
                            {
                              to: t.href,
                              className: ({ isActive: r }) =>
                                `text-gray-700 text-lg font-medium hover:text-primary ${
                                  r ? "text-primary" : ""
                                }`,
                              children: t.name,
                            },
                            t.name
                          )
                        ),
                      }),
                      e.jsx(E, {
                        to: "/donate",
                        className: "btn btn-primary rounded-full",
                        children: "Donate",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "lg:hidden",
                    children: e.jsx("button", {
                      onClick: () => o(!a),
                      className: "text-gray-700 hover:text-primary",
                      children: a
                        ? e.jsx(J, { size: 24 })
                        : e.jsx(Z, { size: 24 }),
                    }),
                  }),
                ],
              }),
              e.jsx("div", {
                ref: s,
                children:
                  a &&
                  e.jsx("div", {
                    className: "transform transition-all",
                    children: e.jsxs("div", {
                      className: "px-2 pt-2 pb-6 space-y-1",
                      ref: l,
                      children: [
                        n.map((t) =>
                          e.jsx(
                            O,
                            {
                              to: t.href,
                              className: ({ isActive: r }) =>
                                `block px-3 py-2 text-lg font-medium transform ${
                                  r
                                    ? "text-primary"
                                    : "text-gray-700 hover:text-primary"
                                }`,
                              onClick: () => o(!1),
                              children: t.name,
                            },
                            t.name
                          )
                        ),
                        e.jsx(E, {
                          to: "/donate",
                          className:
                            "block px-3 py-2 text-lg font-medium text-gray-700 hover:text-primary transform",
                          onClick: () => o(!1),
                          children: "Donate",
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          }),
        }),
      })
    );
  },
  Se = () =>
    e.jsx("footer", {
      className: "w-full bg-primary-dark text-white py-8",
      children: e.jsxs("div", {
        className: "container mx-auto pt-4 text-center",
        children: [
          e.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: "Brotherhood & Unity",
          }),
          e.jsxs("p", {
            className: "text-lg italic mb-6",
            children: [
              '"The believers are but a single brotherhood, so make peace between your brothers." ',
              e.jsx("br", {}),
              "— Qur'an 49:10",
            ],
          }),
          e.jsxs("div", {
            className: "flex justify-center space-x-6 mb-6",
            children: [
              e.jsx("a", {
                href: "https://instagram.com/mssn.abuad/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white text-2xl hover:text-lime-400",
                children: e.jsx(X, { size: 28 }),
              }),
              e.jsx("a", {
                href: "https://x.com/mssn_abuad/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white text-2xl hover:text-lime-400",
                children: e.jsx($, { size: 28 }),
              }),
              e.jsx("a", {
                href: "https://snapchat.com/t/dvDifmKJ",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white text-2xl hover:text-lime-400",
                children: e.jsx(ee, { size: 28 }),
              }),
              e.jsx("a", {
                href: "https://www.youtube.com/channel/UCU6NF-EpDdU_JWJUFt-33Dw",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white text-2xl hover:text-lime-400",
                children: e.jsx(se, { size: 28 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mb-6",
            children: [
              e.jsx("p", { className: "text-lg", children: "Contact us:" }),
              e.jsxs("a", {
                href: "mailto:mssnabuad21@gmail.com",
                className:
                  "text-white text-lg hover:underline flex justify-center items-center space-x-2",
                children: [
                  e.jsx(ae, { size: 28 }),
                  e.jsx("span", { children: "mssnabuad21@gmail.com" }),
                ],
              }),
            ],
          }),
          e.jsx(E, {
            to: "/admin",
            className: "text-sm  hover:text-gray-100 font-medium text-center",
            children: "Admin",
          }),
          e.jsxs("p", {
            className: "text-sm text-gray-200",
            children: [
              "© ",
              new Date().getFullYear(),
              " MSSN ABUAD. All rights reserved.",
            ],
          }),
        ],
      }),
    }),
  Ee = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "flex flex-col min-h-screen bg-white",
        children: [
          e.jsx(V, {}),
          e.jsx(k, {}),
          e.jsx("main", { className: "flex-grow", children: e.jsx(Ne, {}) }),
          e.jsx(Se, {}),
        ],
      }),
    }),
  Ce = () =>
    e.jsxs("div", {
      className: "relative min-h-screen",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 z-0 bg-cover bg-[50%_30%]",
          style: { backgroundImage: 'url("/heroBanner.webp")' },
          children: e.jsx("div", { className: "absolute inset-0 bg-black/25" }),
        }),
        e.jsx("div", {
          className: "relative z-10 h-screen flex items-center",
          children: e.jsxs(Q.div, {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1 },
            className: " text-white container lg:flex items-center",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className:
                      "text-5xl xl:text-6xl max-w-4xl font-bold mb-6 bg-gradient-to-r from-[#3d3532] to-[#be882c] bg-clip-text text-transparent",
                    children:
                      "In the Name of Allah The Creator of the Universe",
                  }),
                  e.jsx("p", {
                    className: "text-2xl mb-8 text-[#826a41] max-w-3xl",
                    children:
                      "Uniting Muslim students in faith, knowledge, and community. Join us in our journey of spiritual growth and academic excellence.",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-4 flex-col sm:flex-row w-max",
                    children: [
                      e.jsxs(E, {
                        to: "/mssn-history",
                        className:
                          "btn btn-primary flex items-center gap-2 cursor-pointer whitespace-nowrap",
                        children: ["About MSSN", e.jsx(te, { size: 20 })],
                      }),
                      e.jsx(E, {
                        to: "/mssn-abuad-history",
                        className:
                          "btn btn-outline text-white border-white hover:bg-white hover:text-primary whitespace-nowrap",
                        children: "MSSN ABUAD",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {}),
            ],
          }),
        }),
      ],
    }),
  Me = "/assets/prayer-BMgHv-VD.webp",
  Re = "/assets/adhan-DAFC30e7.webp",
  Be = "/assets/iqama-ulSvHCP4.webp",
  De = "/assets/dawn-Ex7K0SV9.png",
  ke = "/assets/noon-DJ9E93J-.png",
  Le = "/assets/afternoon-BzZjyJ51.png",
  Pe = "/assets/sunset-jSSRQzjh.png",
  qe =
    "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwcEBQYBAgj/xAA5EAABAwMBBgQEBQMDBQAAAAABAAIDBAURIQYSMUFhcQciMlETFIGRQlKhscFi4fAVM+IjJFOS0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCmyiFEBERAREQEREBERAREQEREBERAREQEREBERAREQeFTQ+k91EVLD6T3QRFEKICIiAiIgIiICIiAiIgIiICIiAiL1B4iZRAREQEREAqWH0nuoipYfSe6CIohRAREQEREBMovDzP+FB6i762bAUtZsfPeP9YhB3hK2bccWRRtDt9pHHeyR/69VwLsBxDXbwBOHYxke+EBE+o+63+z2xe0O0Ya6122V0DuFRL5I/ueP0yg0CLIuVG633GponyxTOp5DG6SI5Y5w44PMA5Geix0BERB61pc5rW6uccAdVlxWyskq20xp5Y3njvNIAHPVYTsYO9w5qzbZFUx2mkZcpMVJjGjneYjlnPHTGUFb1kPy9VNCMkRvLc49io1v9pZLe2smijp3GqacPkad0ZwPutAgIiICIiAVLD6T3URUsPpPdBEUQogIiICIiAiIgz4bzcoII6eKtmbBHG+JsQPl3Hkl4I4HOdc5UVqtlXdq+KgtsLp6mU4Yxv7n2HVR0lNNWVUVLTMMk0rgxjBzJX6B2B2Zpdl6DdG5JXzDM9Rjj/SOgQR7CeE9ptAirb61lxuA8wY7WGI9B+I9T9FvfFTaQbLbITPpSGVdSPl6YDTdJGpHYZW+p5+GTwKpLx/ubqnaO328F25S03xHa6Fzz/x/VBVreGpP1XqLJt9BWXOcwW+mkqJQwvLIxk7o4lBjIvXAtcWuBBBwQeRHELxB6CQQQcEHIIUrauqbUNqRUSfMNdvCUnLgVCiCevq31tbLVPa1j5XBzg3hnAGn2UCYRAREQEREAqWH0nuoipYfSe6CIohRAREQERZ9hpW1t2p4ZWF8JcRJgcBg/2QYCErf1ey1TStqJ5aiFtJFnEriS5w5eX3+q0DGule2Ng8ziGtB9ycILD8K7S1rpbzO0FxJips8vzO/j6FWpTTj3XHWZrKKhgpY9GRMDQPot5TVHVB1NPPnnqqH8Xnuk28rCTo2GIN7bquSmqOqqDxhgLNq46jHkqKVhB6tJB/cIOHWZarpXWepNTbKl9PMWFhc32PFYaIPS5z3Oc85c4kk+5K8RCUBF5nkvUBERAREQEREAqWH0nuoipYfSe6CIohRAREQCMjBGcrfbNXeqirYKRz2GB5IILQCMNJ4jHtzWiQaHI4oOsvd6t10o5qT4ssb43ZjeWndeR1/wDq56zN37tS72CA/OOmFhrMs79y5QnqUFl01Rw1K21LUdVydLUcFtqaoxzQdZTVHDiuR8WaE1VnpbgxuXUsha4+zHf3wtxS1IOMEFZtRFDcaCeiqRmKdhY7680FCjVFk3GimttdPRVAxLC4tPX2I6EarGQDnkrC8KdjoNqhdILrb5vk/hAwXFhwYpQfS33yDqOHlVengt3s9tRdbFWUU1NXVPy9NO2Q0wkIY9ufM3HUZQdV4sbGR7Mi3C022QW9kJEtaRvGWQn8Z5dOA1Vd9lutqNpbhf7rW1U1XU/LTzOfHTukO6xufKMdsLSICIiAiIgIiIBUsPpPdRFSw+k90ERRCiAiIgIi6jZPZM3qM1VXM+ClDt1u4BvSEccewQazZ7Z+4bRV3yltjBdjL5HnDIx7uKtC3eEFtjYw1l5rHzjUOgYxjR9HBx/VbPZi2UOz1E6moA4hz9575NXOPVdBFWajBQcbcvDm50c0RtVVHX073hp3h8OSLOBk8nD3IwenEqwdndkbRaYWfEibWVQGXTzNzr/SDoAvIK3hqs+Kq6oMqqstqrIy2aihIxxa3BH1C4a+WmWx1jWF5fTSaxvOp6g9V3UVT1WHtBbv9boG07ZWxPY8ObI5u9+iCnNudnjeaQV1CwGtgbhzRxlZ7dxyVXEEHBGMZ0K/Q1fYrha2mV+7LA3jJFy7jiFw21ex8d2c6ttO5FWYzJEdGzH+D+6CskUlTBNRzugq4nwzNOrJBghRoCImR7hAVmeGex9tvtpnlvsEO78YSUxZPiZzAPOHAfg0HHqRxyqzGqyrXcKm1VXzNC8RTbjmbwHEOGD9wgz9rqSOhv8AVx08tDJTvfvRfJzCRjW8hp6T0K0y8aN3TXQYC9QEREAqWH0nuoipYfSe6CIohRAREQfUbHSSsjY0ue8hrWjiSVaGz2/b7VT0shbvxtw7c4KvLE9sVzje7GQ127n3/wAyuwirRph2UHWxVnVZkVYfdcjFWf1LqNlLLU34OmjlENMw7plOuTxwBz0KDZQVuDq7HdbCnrcjO8vqfYydm58pWiRpcA7fZuFo99Ct1Bszboot13xnv/OZP44IMOGs/qWfDVdVoLrTvtVWIi8vieMxuP6heU9Zw8yDqmTNe0tdq0jBB5qv7vC2gu1RTN/2wQWD2aRnH6rp4arhnOFwt7uba69VM0bt5gIY0+4AxlBlVlBQXiER3KmjmA9LiPM3seK5qu8L6adzn2y4yQ54Rzt32j6rfU0/Vbamn4aoK1f4VbQ7+IpqGRvuZXN/grMofB2/1Dx8zW0FO08N1znn9grTpqg6AHPRcft/4iC2U8tssczX17vK+duogB9j+b9kFY7X2eisF2da6Wu+emhGKqUMDWNk/K33wOPVaVDlxJJOupPMnnlEBERAREQCpYfSe6iKlh9J7oIiiFEBERABLXBwOCDkFbGK7SMb52Bx9w7Gf0WuTCC0fDCkbeL4yoqKYzUVOwueXegP/CD789FdbJ442hrMNHsAqI8NNqqO122W3VUrYJDMZGuecB4IGmemF3rNqI5GB7JGOa4Za5rsgoO9+ZGeI1C+vjt5EfdV+doWu13/ALFSN2m3fxBB21VFSVjcVcEUuPzjOPfVVftreYtlbxHTthfLS1EZfC7fwRg6tP3C2VRtjSRh3x6yKMM9Qc8aKqNvdpG7R3SJ8IPy1Mwsjc4YLiTkntoEHRVe2VZcI3RQAU0Thg7rt5xHfGn2UFLUYA1XANe9h8r3DsVK2tqmjDamQDugtCnqQ0ZJx3X3U7UWy2t/7iqaX/8Ajj8z/sP5VVSVE8gw+eVw6vKiAA4IOtv23txuMb6agBoqZww4h2ZHjvy7D7rkjqSTqDqcoeHEffguuo9hay67P0FxtI355S5s8Mr9wAZ0eCeSDkUWZd7e61XGahknhnkg8sjoDlofzaCeOOB65WGgIiICIiAVLD6T3URUsPpPdBEUQogIiICIiB9Fm0l0qqSL4UUn/TzkNPJYSINhNea6UjE7mYOcNX06+V+P90d1rU55QHeeQyP8zyclx4lNAM8gi9zhADHuA3WE67pwOZ4BevY+N5ZI0tc04IPIrZWK4RW+cmRryJMNJzoB7491h107KmqkmZC2LeOoaTr1QY6IiCajqpKKqZURMic9hyBKzeae45q07b4gQ02zVNcLjGx1S+YwiCnIBw38WDwAVTL3X3P3QbC/yUE93nntQkFNKfibko8zHHiOOo556rXJgIgIiICIiAVLD6T3URUsPpPdBEUQogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAVLD6T3URUsPpPdBEUQogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAVLD6T3URUsPpPdB//9k=",
  Oe = "/assets/jumuah-D-TqUJH5.png",
  Ue = () => {
    var v, u, m, h, f, x, A, b, y, S, M, p;
    const [a, o] = i.useState(null),
      [s, l] = i.useState(null),
      [n, t] = i.useState(!0);
    i.useEffect(() => {
      const j = async () => {
        try {
          const G = await (
            await fetch(
              `https://api.aladhan.com/v1/timings/${
                Date.now() / 1e3
              }?latitude=${7.6057065}&longitude=${5.3091123}&method=1`
            )
          ).json();
          o(G.data.timings);
        } catch (C) {
          console.error("Error fetching prayer times:", C);
        } finally {
          t(!1);
        }
      };
      j();
      const I = setInterval(j, 3e5);
      return () => clearInterval(I);
    }, []),
      i.useEffect(() => {
        (async () => {
          try {
            const I = await g.get(
              `https://mssn.pythonanywhere.com/api/prayer-times?t=${Date.now()}`
            );
            l(I.data);
          } catch (I) {
            console.error("Error getting mosque prayer times:", I);
          }
        })();
      }, []);
    const r = () => {
        window.location.reload();
      },
      c = (j) => (j ? T(new Date(`2024-01-01T${j}`), "HH:mm") : "-"),
      d = [
        {
          name: "Fajr",
          icon: De,
          adhan: (v = s == null ? void 0 : s.fajr) == null ? void 0 : v.adhan,
          iqama: (u = s == null ? void 0 : s.fajr) == null ? void 0 : u.iqama,
        },
        {
          name: "Dhuhr",
          icon: ke,
          adhan: (m = s == null ? void 0 : s.dhuhr) == null ? void 0 : m.adhan,
          iqama: (h = s == null ? void 0 : s.dhuhr) == null ? void 0 : h.iqama,
        },
        {
          name: "Asr",
          icon: Le,
          adhan: (f = s == null ? void 0 : s.asr) == null ? void 0 : f.adhan,
          iqama: (x = s == null ? void 0 : s.asr) == null ? void 0 : x.iqama,
        },
        {
          name: "Maghrib",
          icon: Pe,
          adhan:
            (A = s == null ? void 0 : s.maghrib) == null ? void 0 : A.adhan,
          iqama:
            (b = s == null ? void 0 : s.maghrib) == null ? void 0 : b.iqama,
        },
        {
          name: "Isha",
          icon: qe,
          adhan: (y = s == null ? void 0 : s.isha) == null ? void 0 : y.adhan,
          iqama: (S = s == null ? void 0 : s.isha) == null ? void 0 : S.iqama,
        },
        {
          name: "Jumu'ah",
          icon: Oe,
          adhan: (M = s == null ? void 0 : s.jumuah) == null ? void 0 : M.adhan,
          iqama: (p = s == null ? void 0 : s.jumuah) == null ? void 0 : p.iqama,
        },
      ];
    return e.jsxs("section", {
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            e.jsx(D, { className: "text-primary", size: 24 }),
            e.jsx("h2", {
              className: "text-2xl md:text-3xl font-bold",
              children: "Prayer Times",
            }),
          ],
        }),
        e.jsxs("button", {
          onClick: r,
          className:
            "ml-auto flex items-center gap-2 text-primary hover:text-primary-dark",
          children: [
            e.jsx(re, { size: 20 }),
            e.jsx("span", { children: "Refresh" }),
          ],
        }),
        e.jsxs("div", {
          className:
            "hidden md:block bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-4",
          children: [
            e.jsx("h2", {
              className: "text-xl font-medium mb-4 text-center",
              children: "Prayer Time by Coordinates of ABUAD mosque",
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
              children:
                a &&
                Object.entries(a)
                  .filter(([j]) =>
                    ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(j)
                  )
                  .map(([j, I]) =>
                    e.jsxs(
                      "div",
                      {
                        className: "bg-gray-50 rounded-lg p-4 text-center",
                        children: [
                          e.jsx("h3", {
                            className: "font-arabic text-lg mb-2",
                            children: j,
                          }),
                          n
                            ? e.jsx("div", {
                                className: "text-center py-8",
                                children: e.jsx("div", {
                                  className:
                                    "animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto",
                                }),
                              })
                            : e.jsx("p", {
                                className: "text-xl font-semibold text-primary",
                                children: T(
                                  new Date(`2024-01-01 ${I}`),
                                  "HH:mm"
                                ),
                              }),
                        ],
                      },
                      j
                    )
                  ),
            }),
          ],
        }),
        e.jsx("div", {
          className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
          children: e.jsxs("div", {
            className: "lg:flex flex-row-reverse gap-x-8",
            children: [
              e.jsxs("div", {
                className: "flex-[0.45] overflow-x-scroll scrollbar-hidden",
                children: [
                  e.jsx("h2", {
                    className: "text-2xl font-medium mb-4 text-center",
                    children: "Mosque Prayer Schedule",
                  }),
                  e.jsxs("table", {
                    className:
                      "min-w-full bg-white border-separate border-spacing-y-4",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          children: [
                            e.jsxs("th", {
                              className: "px-4",
                              children: [
                                e.jsx("img", {
                                  src: Me,
                                  alt: "Prayer Icon",
                                  className: "w-16 mx-auto mb-2",
                                }),
                                e.jsx("p", {
                                  className: "text-lg font-bold",
                                  children: "Prayer",
                                }),
                              ],
                            }),
                            e.jsxs("th", {
                              className: "px-4",
                              children: [
                                e.jsx("img", {
                                  src: Re,
                                  alt: "Adhan Icon",
                                  className: "w-16 mx-auto mb-2",
                                }),
                                e.jsx("p", {
                                  className: "text-lg font-bold",
                                  children: "Adhan",
                                }),
                              ],
                            }),
                            e.jsxs("th", {
                              className: "px-4",
                              children: [
                                e.jsx("img", {
                                  src: Be,
                                  alt: "Iqama Icon",
                                  className: "w-16 mx-auto mb-2",
                                }),
                                e.jsx("p", {
                                  className: "text-lg font-bold",
                                  children: "Iqama",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: d.map((j, I) =>
                          e.jsxs(
                            "tr",
                            {
                              children: [
                                e.jsx("td", {
                                  className:
                                    "px-4 py-2 text-center font-medium border-2 rounded-md",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 justify-center",
                                    children: [
                                      e.jsx("img", {
                                        src: j.icon,
                                        alt: `${j.name} icon`,
                                        className: "w-6 h-6",
                                      }),
                                      j.name,
                                    ],
                                  }),
                                }),
                                e.jsx("td", {
                                  className:
                                    "px-4 py-2 text-center font-medium border-2 rounded-md",
                                  children: c(j.adhan),
                                }),
                                e.jsx("td", {
                                  className:
                                    "px-4 py-2 text-center font-medium border-2 rounded-md",
                                  children: c(j.iqama),
                                }),
                              ],
                            },
                            I
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-[0.55] mt-8 lg:mt-24",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-bold mb-2",
                        children: "Encourage yourselves to pray on time:",
                      }),
                      e.jsx("article", {
                        className: "text-lg mb-4",
                        children: `Narrated Ibn Mas\`ud: A man asked the Prophet (ﷺ) "What deeds are the best?" The Prophet (ﷺ) said: "(1) To perform the (daily compulsory) prayers at their (early) stated fixed times, (2) to be good and dutiful to one's own parents, (3) and to participate in Jihad in Allah's Cause."`,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-bold mb-2",
                        children:
                          "Encourage yourselves to pray in congregation:",
                      }),
                      e.jsxs("article", {
                        className: "text-lg",
                        children: [
                          `Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah ﷺ said, "A man's Salat in congregation is twenty-five times more rewarding than his Salat at home or in his shop..."`,
                          e.jsx("br", {}),
                          "[Al-Bukhari and Muslim].",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Te = () => {
    const a = [
        {
          type: "Hadith",
          content:
            "The best among you are those who learn the Quran and teach it to others.",
          source: "Sahih Al-Bukhari",
        },
        {
          type: "Verse",
          content: "Indeed, Allah is with those who are patient.",
          source: "Quran 2:153",
        },
        {
          type: "Hadith",
          content:
            "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
          source: "Sahih Muslim",
        },
        {
          type: "Verse",
          content:
            "And remind, for indeed, the reminder benefits the believers.",
          source: "Quran 51:55",
        },
        {
          type: "Hadith",
          content:
            "Whoever seeks forgiveness for every male and female believer, Allah will record a good deed for him for every male and female believer.",
          source: "Hadith",
        },
        {
          type: "Verse",
          content:
            "Do not falter or grieve, for you will have the upper hand, if you are true believers.",
          source: "Quran 3:139",
        },
        {
          type: "Hadith",
          content:
            "Verily, the five prayers get rid of sins just as water gets rid of dirt.",
          source: "Sahih Muslim",
        },
        {
          type: "Verse",
          content: "Call upon Me; I will respond to you.",
          source: "Quran 40:60",
        },
        {
          type: "Hadith",
          content:
            "When the son of Adam dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.",
          source: "Sahih Muslim",
        },
        {
          type: "Verse",
          content:
            "And whoever puts their trust in Allah, then He will suffice them.",
          source: "Quran 65:3",
        },
        {
          type: "Hadith",
          content:
            "Allah does not look at your appearance or wealth, but He looks at your hearts and actions.",
          source: "Sahih Muslim",
        },
        {
          type: "Verse",
          content: "And whoever fears Allah – He will make for him a way out.",
          source: "Quran 65:2",
        },
      ],
      o = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3,
      };
    return e.jsxs("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            e.jsx(L, { className: "text-primary", size: 24 }),
            e.jsx("h2", {
              className: "text-2xl font-bold",
              children: "Reminders",
            }),
          ],
        }),
        e.jsx(Ie, {
          ...o,
          children: a.map((s, l) =>
            e.jsx(
              "div",
              {
                className: "px-4",
                children: e.jsxs("div", {
                  className: "text-center space-y-4 py-8",
                  children: [
                    e.jsx("span", {
                      className:
                        "inline-block px-4 py-1 bg-primary/10 text-primary rounded-full",
                      children: s.type,
                    }),
                    e.jsx("p", {
                      className: "text-xl md:text-2xl font-arabic",
                      children: s.content,
                    }),
                    e.jsxs("p", {
                      className: "text-gray-600 italic",
                      children: ["- ", s.source],
                    }),
                  ],
                }),
              },
              l
            )
          ),
        }),
      ],
    });
  },
  ze = () =>
    e.jsxs("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            e.jsx(z, { className: "text-primary", size: 24 }),
            e.jsx("h2", {
              className: "text-2xl font-bold",
              children: "Mosque",
            }),
          ],
        }),
        e.jsx("div", {
          className: "h-[400px] rounded-lg overflow-hidden",
          children: e.jsx("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.091674163592!2d5.305900060338608!3d7.604580473335877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047e500326c0a79%3A0xecf486a2a504f18f!2sABUAD%20MOSQUE!5e0!3m2!1sen!2sng!4v1739928239411!5m2!1sen!2sng",
            width: "100%",
            height: "100%",
            style: { border: 0 },
            allowFullScreen: "",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }),
        }),
        e.jsxs("div", {
          className: "mt-6",
          children: [
            e.jsx("h3", {
              className: "font-semibold mb-2",
              children: "Address",
            }),
            e.jsxs("p", {
              className: "text-gray-600",
              children: [
                "MSSN Mosque, Afe Babalola University,",
                e.jsx("br", {}),
                "Ado-Ekiti, Ekiti State, Nigeria",
              ],
            }),
          ],
        }),
      ],
    }),
  W = () => {
    const a = [
      {
        title: "Sunday Program",
        description:
          "Weekly Islamic lectures and discussions on various topics",
        icon: R,
        time: "Sundays( 10:00/11:00 AM to Dhuhr)",
      },
      {
        title: "Qur'an Teaching",
        description: "Learn the Holy Qur'an either by Heart or  Recitation",
        icon: P,
        time: "Weekdays (Maghrib to Isha)",
      },
      {
        title: "Tajweed Classes",
        description:
          "    Learn Qur'an with proper tajweed from qualified instructors",
        icon: P,
        time: "Weekdays (Maghrib to Isha)",
      },
      {
        title: "Hadith Classes",
        description: "Learn about some Ahadith",
        icon: L,
        time: "Any day (Subh and Isha)",
      },
      {
        title: "Sisters Circle",
        description:
          "Learn about matters/issue related to muslim female affairs",
        icon: R,
        time: "Saturdays (Asr to Maghrib)",
      },
      {
        title: "Fiqh Reminders",
        description: "Learn about some books of Fiqh(e.g Umdat Al Ahkam)",
        icon: L,
        time: "Any day (Subh and Isha)",
      },
      {
        title: "Qur'an Competition",
        description: "Annual competition to encourage Qur'an memorization",
        icon: ne,
        time: "Yearly / Bi-annual Event",
      },
      {
        title: "Sports week",
        description: "Football Training(Male)",
        icon: le,
        time: "Sceduled by MSSN brothers agreement",
      },
    ];
    return e.jsx("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
      children: a.map((o, s) =>
        e.jsxs(
          Q.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: s * 0.1 },
            className:
              "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4",
                children: e.jsx(o.icon, {
                  className: "text-primary",
                  size: 24,
                }),
              }),
              e.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: o.title,
              }),
              e.jsx("p", {
                className: "text-gray-600 mb-8",
                children: o.description,
              }),
              e.jsx("div", {
                className: "text-sm text-primary font-medium absolute bottom-4",
                children: o.time,
              }),
            ],
          },
          s
        )
      ),
    });
  },
  He = "/assets/meal-schedule-CJplWLNg.png",
  Fe = "/assets/taraweeh-imam-B_FAKvUC.png",
  Qe = "/assets/taraweeh-image-CmhZ7S8e.png",
  Ve = () =>
    e.jsxs("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3 mb-8",
          children: [
            e.jsx(ie, { className: "text-primary", size: 24 }),
            e.jsx("h2", {
              className: "text-2xl font-bold",
              children: "Ramadan 1445H",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid md:grid-cols-2 gap-8",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx(B, { className: "text-primary", size: 20 }),
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "Tarawih Schedule",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-4",
                  children: e.jsx("img", { src: Qe, alt: "Failed to load" }),
                }),
                e.jsx("div", {
                  className: "my-8 flex justify-center",
                  children: e.jsx("a", {
                    href: Fe,
                    className:
                      "bg-primary px-4 py-3 text-white font-medium text-lg rounded-md",
                    download: !0,
                    children: "Download Schedule",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx(R, { className: "text-primary", size: 20 }),
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "Iftar Arrangements",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "bg-gray-50 rounded-lg p-4 space-y-4",
                  children: [
                    e.jsxs("p", {
                      className: "text-gray-600",
                      children: [
                        "We provide meals for all students who make orders for meal gotten from ",
                        e.jsx("strong", { children: "Captain Cook" }),
                        ".",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "Join us for daily Iftar at the MSSN Mosque. We provide meals for all students and community members.",
                    }),
                    e.jsxs("div", {
                      className: "text-lg mt-12",
                      children: [
                        e.jsx("strong", { children: "Complain:" }),
                        " To make any complain about Sahur/Iftar arrangements or meal, please contact any of the MSSN EXCO.",
                      ],
                    }),
                    e.jsx("div", {
                      className: "my-8 flex justify-center",
                      children: e.jsx("a", {
                        href: He,
                        className:
                          "bg-primary px-4 py-2 text-white font-medium text-lg rounded-md",
                        download: !0,
                        children: "Download Meal Schedule",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  We = () =>
    e.jsx("div", {
      children: e.jsxs("div", {
        className: "space-y-16 pb-16",
        children: [
          e.jsx(Ce, {}),
          e.jsx("section", { className: "container", children: e.jsx(Ue, {}) }),
          e.jsx("section", {
            className: "bg-gray-50 py-16",
            children: e.jsx("div", {
              className: "container",
              children: e.jsx(Te, {}),
            }),
          }),
          e.jsx("section", {
            className: "bg-gray-50 py-16",
            children: e.jsxs("div", {
              className: "container",
              children: [
                e.jsx("h1", {
                  className: "text-4xl font-bold mb-4 text-center",
                  children: "Our Programs",
                }),
                e.jsx("p", {
                  className: "text-lg text-gray-600 mb-12 text-center",
                  children:
                    "At MSSN ABUAD, we offer a variety of programs designed to enhance your spiritual growth and Islamic knowledge. Join us in our journey of learning and community building.",
                }),
                e.jsx(W, {}),
              ],
            }),
          }),
          e.jsx("section", {
            className: "bg-primary/5 py-16",
            children: e.jsx("div", {
              className: "container",
              children: e.jsx(Ve, {}),
            }),
          }),
          e.jsx("section", { className: "container", children: e.jsx(ze, {}) }),
        ],
      }),
    }),
  Ye = () =>
    e.jsx("div", {
      className: "pt-32 pb-16",
      children: e.jsxs("div", {
        className: "container",
        children: [
          e.jsx("h1", {
            className: "text-4xl font-bold mb-8",
            children: "Our Programs",
          }),
          e.jsx("p", {
            className: "text-lg text-gray-600 mb-12",
            children:
              "At MSSN ABUAD, we offer a variety of programs designed to enhance your spiritual growth and Islamic knowledge. Join us in our journey of learning and community building.",
          }),
          e.jsx(W, {}),
        ],
      }),
    }),
  Ge = () => {
    const [a, o] = i.useState([]),
      [s, l] = i.useState(!0),
      n = [
        "Caps",
        "Socks",
        "Jilbabs (Premium, Regular)",
        "Prayer Mat(Soft, Regular)",
        "Kettles",
        "Dates",
        "Qur'an",
        "Tasbeeh, Counters",
      ];
    return (
      i.useEffect(() => {
        (async () => {
          try {
            const r = await g.get(
              "https://mssn.pythonanywhere.com/api/products"
            );
            o(r.data);
          } catch (r) {
            console.error("Error fetching products:", r);
          } finally {
            l(!1);
          }
        })();
      }, [a]),
      e.jsx("div", {
        className: "pt-32 pb-16",
        children: e.jsxs("div", {
          className: "container",
          children: [
            e.jsxs("div", {
              className: "flex justify-between items-center mb-8",
              children: [
                e.jsx("h1", {
                  className: "text-2xl md:text-4xl font-bold",
                  children: "Available Products",
                }),
                e.jsx("div", {
                  className: "relative",
                  children: e.jsx(oe, { className: "text-primary", size: 24 }),
                }),
              ],
            }),
            s
              ? e.jsxs("div", {
                  className: "pt-32 pb-16 container text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
                    }),
                    e.jsx("p", {
                      className: "mt-4",
                      children: "Loading store products...",
                    }),
                  ],
                })
              : e.jsx("div", {
                  className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: a.map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-xl shadow-lg overflow-hidden max-h-max",
                        children: [
                          e.jsx("img", {
                            src:
                              t.image_url || "https://via.placeholder.com/50",
                            alt: t.name,
                            className:
                              "w-full h-48 object-cover hover:h-max hover:z-50",
                          }),
                          e.jsxs("div", {
                            className: "p-4",
                            children: [
                              e.jsx("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: t.name,
                              }),
                              e.jsx("p", {
                                className: "text-gray-600 text-base mb-4 h-12",
                                children: t.description,
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center mt-8",
                                children: [
                                  e.jsxs("span", {
                                    className: "text-primary font-bold",
                                    children: ["₦", t.price],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-x-2",
                                    children: [
                                      e.jsx(E, {
                                        to: "https://wa.me/2348108660433?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20a%20product.",
                                        className: "btn btn-primary p-2",
                                        children: "WhatsApp",
                                      }),
                                      e.jsx(E, {
                                        to: "tel:+2348108660433",
                                        className: "btn btn-primary p-2",
                                        children: e.jsx(de, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t.id
                    )
                  ),
                }),
            a == [] && s === !1
              ? e.jsx("p", {
                  className: "mt-4",
                  children: "No available product",
                })
              : "",
            e.jsxs("div", {
              className: "pt-16",
              children: [
                e.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-center mb-6",
                  children: "Things We Sell",
                }),
                e.jsx("ul", {
                  className: "list-disc list-inside text-xl text-gray-700",
                  children: n.map((t, r) =>
                    e.jsx("li", { className: "mb-2", children: t }, r)
                  ),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  _e = () => {
    const [a, o] = i.useState(""),
      s = [
        {
          id: 1,
          question: "What are the requirements for joining MSSN ABUAD?",
          answer:
            "Any Muslim student at ABUAD can join MSSN. Simply attend our meetings and register with the membership committee.",
          date: "2024-03-10",
        },
        {
          id: 2,
          question: "How can I participate in the Qur'an competition?",
          answer:
            "Register through our website or contact the program coordinator. Competitions are held annually with different categories.",
          date: "2024-03-08",
        },
      ],
      l = (n) => {
        n.preventDefault(), o("");
      };
    return e.jsx("div", {
      className: "pt-32 pb-16",
      children: e.jsxs("div", {
        className: "container",
        children: [
          e.jsxs("div", {
            className: "ml-6 mb-4",
            children: [
              e.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Community Forum",
              }),
              e.jsx("p", {
                className: "text-lg text-gray-600",
                children:
                  "Have questions? Looking for answers? Our community is here to help. Engage in meaningful discussions, share insights, and get the guidance you need.",
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: l,
            className: "bg-white rounded-xl shadow-lg p-6 mb-8",
            children: [
              e.jsx("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Ask a Question",
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-y-1 gap-x-4 sm:items-center",
                    children: [
                      e.jsx("label", {
                        htmlFor: "email",
                        className: "w-full",
                        children: "Enter your email",
                      }),
                      e.jsx("input", {
                        name: "email",
                        type: "email",
                        placeholder: "Type your email to receive answer",
                        className:
                          "w-full  h-12 p-4 rounded-lg border-2 border-primary",
                      }),
                    ],
                  }),
                  e.jsx("textarea", {
                    value: a,
                    onChange: (n) => o(n.target.value),
                    placeholder: "Type your question here...",
                    className:
                      "w-full h-32 p-4 rounded-lg border-2 border-primary",
                  }),
                  e.jsxs("button", {
                    type: "submit",
                    className: "btn btn-primary flex items-center gap-2",
                    onClick: () =>
                      N.warn("Forum question and answer coming soon"),
                    children: [e.jsx(ce, { size: 20 }), "Submit Question"],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "space-y-6",
            children: s.map((n) =>
              e.jsx(
                "div",
                {
                  className: "bg-white rounded-xl shadow-lg p-6",
                  children: e.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",
                        children: e.jsx(H, {
                          className: "text-primary",
                          size: 20,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: n.question,
                          }),
                          e.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: n.answer,
                          }),
                          e.jsxs("div", {
                            className: "text-sm text-gray-500",
                            children: [
                              "Asked on ",
                              new Date(n.date).toLocaleDateString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                n.id
              )
            ),
          }),
        ],
      }),
    });
  },
  Ke = ({ slugify: a }) => {
    const [o, s] = i.useState([]),
      [l, n] = i.useState(!0);
    return (
      i.useEffect(() => {
        (async () => {
          try {
            const r = await g.get("https://mssn.pythonanywhere.com/api/blogs");
            s(r.data);
          } catch (r) {
            console.error("Error fetching blogs:", r);
          } finally {
            n(!1);
          }
        })();
      }, []),
      e.jsx("div", {
        className: "pt-32 pb-16",
        children: e.jsxs("div", {
          className: "container",
          children: [
            e.jsx("h1", {
              className: "text-3xl md:text-4xl font-bold mb-4",
              children: "Blog",
            }),
            e.jsx("p", {
              className: "text-lg text-gray-600 mb-8",
              children:
                "We welcome your contributions! You can upload your blog post, subject to approval by the MSSN EXCO team. Please ensure that any quotations from hadith or the Qur'an include clear references to their sources.",
            }),
            e.jsx("p", {
              className: "text-lg text-gray-600 mb-4",
              children: "Please format your submission as follows:",
            }),
            e.jsxs("ul", {
              className: "list-decimal ml-6 text-lg text-gray-600 mb-2",
              children: [
                e.jsx("li", { children: "Your name" }),
                e.jsx("li", { children: "The content of the post" }),
                e.jsx("li", { children: "Topic of the post" }),
                e.jsx("li", { children: "Summary of the post (few words)" }),
              ],
            }),
            e.jsxs("p", {
              className: "mb-8 text-xl",
              children: [
                e.jsx("strong", { children: "Note: " }),
                " Either Hard or Soft copy could be submitted/sent to the appropriate EXCO",
              ],
            }),
            l
              ? e.jsxs("div", {
                  className: "pt-32 pb-16 container text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
                    }),
                    e.jsx("p", {
                      className: "mt-4",
                      children: "Loading blog posts...",
                    }),
                  ],
                })
              : e.jsx("div", {
                  className: "grid md:grid-cols-2 gap-8",
                  children: o.map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-xl shadow-lg overflow-hidden",
                        children: [
                          e.jsx("img", {
                            src:
                              t.image_url ||
                              "https://via.placeholder.com/500x300?text=Blog+Image",
                            alt: t.title,
                            className: "w-full h-48 object-cover",
                          }),
                          e.jsxs("div", {
                            className: "p-6",
                            children: [
                              e.jsx("h2", {
                                className: "text-xl font-semibold mb-3",
                                children: t.title,
                              }),
                              e.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: t.summary,
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-4 text-sm text-gray-500 mb-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(F, { size: 16 }),
                                      t.author,
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(D, { size: 16 }),
                                      t.read_time,
                                      " min read",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                children: e.jsxs(E, {
                                  to: `/blog/${a(t.title)}`,
                                  className:
                                    "text-primary hover:text-primary-dark font-medium mt-2",
                                  children: [
                                    "Read Now",
                                    e.jsx("span", {
                                      className: "text-xl",
                                      children: "→",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      t.id
                    )
                  ),
                }),
            o.length === 0 &&
              e.jsx("div", {
                className: "text-center py-12",
                children: e.jsx("p", {
                  className: "text-lg text-gray-600",
                  children: "No blog posts available yet.",
                }),
              }),
          ],
        }),
      })
    );
  },
  Je = () => {
    const [a, o] = i.useState([]),
      [s, l] = i.useState(!0);
    return (
      i.useEffect(() => {
        (async () => {
          try {
            const t = await g.get("https://mssn.pythonanywhere.com/api/events");
            o(t.data);
          } catch (t) {
            console.error("Error fetching events:", t);
          } finally {
            l(!1);
          }
        })();
      }, []),
      s
        ? e.jsxs("div", {
            className: "pt-32 pb-16 container text-center",
            children: [
              e.jsx("div", {
                className:
                  "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
              }),
              e.jsx("p", { className: "mt-4", children: "Loading Events..." }),
            ],
          })
        : e.jsx("div", {
            className: "pt-32 pb-16",
            children: e.jsxs("div", {
              className: "container",
              children: [
                e.jsx("h1", {
                  className: "text-3xl md:text-4xl font-bold mb-8",
                  children: "Events",
                }),
                e.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    a.map((n) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "bg-white rounded-xl shadow-lg overflow-hidden",
                          children: e.jsxs("div", {
                            className: "md:flex",
                            children: [
                              n.image_url &&
                                e.jsx("div", {
                                  className:
                                    "md:w-1/3 h-72 overflow-hidden rounded-lg",
                                  children: e.jsx("img", {
                                    src: n.image_url,
                                    alt: n.title,
                                    className: "w-full h-full",
                                  }),
                                }),
                              e.jsxs("div", {
                                className: "p-6 md:w-2/3",
                                children: [
                                  e.jsx("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: n.title,
                                  }),
                                  e.jsx("p", {
                                    className: "text-gray-600 mb-6",
                                    children: n.summary,
                                  }),
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          e.jsx(B, {
                                            size: 20,
                                            className: "text-primary",
                                          }),
                                          new Date(n.date).toLocaleDateString(
                                            "en-US",
                                            {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            }
                                          ),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          e.jsx(D, {
                                            size: 20,
                                            className: "text-primary",
                                          }),
                                          n.time,
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          e.jsx(z, {
                                            size: 20,
                                            className: "text-primary",
                                          }),
                                          n.content,
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          e.jsx(R, {
                                            size: 20,
                                            className: "text-primary",
                                          }),
                                          n.availability,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        n.id
                      )
                    ),
                    a.length === 0 &&
                      e.jsx("div", {
                        className: "text-center py-12",
                        children: e.jsx("p", {
                          className: "text-lg text-gray-600",
                          children: "No Event available.",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          })
    );
  },
  Ze = () => {
    const a = [
        { bank: "Wema Bank", number: "0229896752", name: "MSSN ABUAD CHAPTER" },
      ],
      o = [
        { name: "Hiqmah", number: "07069976630" },
        { name: "Ibrahum Mulero", number: "08108660433" },
        { name: "Ibrahim Abubakar", number: "08060131363" },
        { name: "Azeezat", number: "07089455909" },
      ],
      s = (l) => {
        navigator.clipboard.writeText(l), N.success("Number Copied");
      };
    return e.jsx("div", {
      className: "pt-32 pb-16",
      children: e.jsxs("div", {
        className: "container max-w-4xl",
        children: [
          e.jsxs("div", {
            className: "text-center mb-12",
            children: [
              e.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Support Our Cause",
              }),
              e.jsx("p", {
                className: "text-lg text-gray-600",
                children:
                  "Your donations help us maintain the mosque, organize programs, and support students in need.",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white rounded-xl shadow-lg p-8 mb-8",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx(me, { className: "text-primary", size: 24 }),
                  e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: "Bank Account Details",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "space-y-6",
                children: a.map((l, n) =>
                  e.jsx(
                    "div",
                    {
                      className: "bg-gray-50 rounded-lg p-6",
                      children: e.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "font-semibold text-lg mb-2",
                                children: l.bank,
                              }),
                              e.jsx("p", {
                                className: "text-gray-600",
                                children: l.name,
                              }),
                              e.jsx("p", {
                                className: "text-xl font-mono mt-2",
                                children: l.number,
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            onClick: () => s(l.number),
                            className:
                              "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: e.jsx(U, {
                              size: 20,
                              className: "text-gray-500",
                            }),
                          }),
                        ],
                      }),
                    },
                    n
                  )
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white rounded-xl shadow-lg p-8 mb-8",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx(he, { className: "text-primary", size: 24 }),
                  e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: "Cash Donation / Dues Payment",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "space-y-6",
                children: o.map((l, n) =>
                  e.jsx(
                    "div",
                    {
                      className: "bg-gray-50 rounded-lg p-6",
                      children: e.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-gray-600 font-medium text-xl",
                                children: l.name,
                              }),
                              e.jsx("p", {
                                className: "text-xl font-mono mt-2",
                                children: l.number,
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            onClick: () => s(l.number),
                            className:
                              "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: e.jsx(U, {
                              size: 20,
                              className: "text-gray-500",
                            }),
                          }),
                        ],
                      }),
                    },
                    n
                  )
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-primary/5 rounded-xl p-8",
            children: [
              e.jsx(xe, { className: "text-primary mx-auto mb-4", size: 32 }),
              e.jsx("h3", {
                className: "text-xl font-semibold mb-8 text-center",
                children: "Every Contribution Counts",
              }),
              e.jsxs("ul", {
                className: "flex flex-col gap-y-4",
                children: [
                  e.jsx("li", {
                    className: "text-gray-600",
                    children:
                      'The Prophet (peace be upon him) said: "Every act of kindness is charity."',
                  }),
                  e.jsx("li", {
                    className: "text-gray-600",
                    children: `The Prophet (peace be upon him) said: "Every act of kindness is charity." Salat is clear proof, and Sawm (fasting) is an impregnable shield, and Sadaqah (charity) extinguishes sins just as water extinguishes fire.” [Jami' at-Tirmidhi].`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Xe = () => {
    const [a, o] = i.useState([]),
      [s, l] = i.useState(null),
      [n, t] = i.useState(!0);
    return (
      i.useEffect(() => {
        (async () => {
          try {
            const c = await g.get("https://mssn.pythonanywhere.com/api/news");
            c.data.length > 0 && (o(c.data), l(c.data[0]));
          } catch (c) {
            console.error("Error fetching news:", c);
          } finally {
            t(!1);
          }
        })();
      }, []),
      n
        ? e.jsxs("div", {
            className: "pt-32 pb-16 container text-center",
            children: [
              e.jsx("div", {
                className:
                  "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
              }),
              e.jsx("p", { className: "mt-4", children: "Loading News..." }),
            ],
          })
        : e.jsx("section", {
            className: "pt-32 pb-16 bg-gray-100",
            children: e.jsxs("div", {
              className: "container mx-auto px-4",
              children: [
                e.jsxs("header", {
                  className: "mb-10 text-center",
                  children: [
                    e.jsx("h1", {
                      className: "text-3xl md:text-4xl font-bold",
                      children: "Latest News",
                    }),
                    e.jsx("p", {
                      className: "text-lg text-gray-600 mt-2",
                      children:
                        "Stay updated with the latest happenings at MSSN and around the school.",
                    }),
                  ],
                }),
                s &&
                  e.jsxs("article", {
                    className:
                      "mb-12 bg-white shadow-lg rounded-lg overflow-hidden",
                    children: [
                      s.image_url &&
                        e.jsx("img", {
                          src: s.image_url,
                          alt: s.title,
                          className: "w-full h-56 object-cover",
                        }),
                      e.jsxs("div", {
                        className: "p-6",
                        children: [
                          e.jsx("h2", {
                            className: "text-2xl font-semibold mb-2",
                            children: s.title,
                          }),
                          e.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: s.summary,
                          }),
                          e.jsxs("p", {
                            className: "text-gray-600 text-sm mb-2",
                            children: ["By ", s.author],
                          }),
                          e.jsx("button", {
                            className:
                              "inline-block text-primary font-semibold hover:underline",
                            children: "Read More →",
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                  children: a
                    .slice(1)
                    .map((r) =>
                      e.jsxs(
                        "article",
                        {
                          className:
                            "bg-white shadow-lg rounded-lg overflow-hidden",
                          children: [
                            r.image_url &&
                              e.jsx("img", {
                                src: r.image_url,
                                alt: r.title,
                                className: "w-full h-40 object-cover",
                              }),
                            e.jsxs("div", {
                              className: "p-4",
                              children: [
                                e.jsx("h3", {
                                  className: "text-xl font-semibold mb-2",
                                  children: r.title,
                                }),
                                e.jsx("p", {
                                  className: "text-gray-600 text-sm mb-2",
                                  children: r.summary,
                                }),
                                e.jsxs("p", {
                                  className: "text-gray-500 text-xs mb-2",
                                  children: ["By ", r.author],
                                }),
                                e.jsx("button", {
                                  className:
                                    "text-primary font-medium hover:underline",
                                  children: "Read More",
                                }),
                              ],
                            }),
                          ],
                        },
                        r.id
                      )
                    ),
                }),
              ],
            }),
          })
    );
  },
  $e = () =>
    e.jsx("div", {
      className: "bg-gray-100 min-h-screen py-10 px-4 sm:pt-24",
      children: e.jsxs("div", {
        className: "max-w-6xl mx-auto  p-6",
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold text-center text-green-600 mb-6",
            children: "Full History of MSSN",
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Introduction",
              }),
              e.jsxs("p", {
                className: "text-gray-700",
                children: [
                  "The ",
                  e.jsx("strong", {
                    children: "Muslim Students' Society of Nigeria (MSSN)",
                  }),
                  " is the oldest and largest Islamic student organization in Nigeria, founded to promote Islamic education, unity, and welfare among Muslim students.",
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Foundation and Early Years (1954 - 1960s)",
              }),
              e.jsxs("p", {
                className: "text-gray-700",
                children: [
                  "MSSN was established on April 18, 1954, at",
                  " ",
                  e.jsx("strong", { children: "King’s College, Lagos" }),
                  ", by a group of young Muslim students. The founder and first National President was",
                  " ",
                  e.jsx("strong", { children: "Dr. AbdulLateef Adegbite" }),
                  ".",
                ],
              }),
              e.jsx("p", {
                className: "text-gray-700 mt-2",
                children:
                  "The organization was created to address the lack of Islamic support for students in Christian-dominated schools. In the 1950s, many Muslim students faced discrimination, lack of prayer spaces, and no access to Islamic education in schools. MSSN emerged to protect Muslim students' rights and promote Islamic values in schools and universities.",
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Expansion and National Recognition (1970s - 1980s)",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children:
                  "MSSN expanded beyond Lagos into different states and universities. By the 1970s, it had strong chapters in universities and secondary schools across Nigeria.",
              }),
              e.jsx("p", {
                className: "text-gray-700 mt-2",
                children:
                  "The Nigerian government officially recognized MSSN as a national student organization. It became an influential group in the Nigerian Supreme Council for Islamic Affairs (NSCIA), advocating for Muslim students’ rights and education policies.",
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Growth and Influence (1990s - 2000s)",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children:
                  "MSSN became one of the largest Islamic organizations in Nigeria. It played a key role in:",
              }),
              e.jsxs("ul", {
                className: "list-disc list-inside text-gray-700 mt-2",
                children: [
                  e.jsx("li", {
                    children:
                      "Establishing Muslim student associations in secondary schools.",
                  }),
                  e.jsx("li", {
                    children:
                      "Organizing national Islamic camps (Ijtima) for Islamic education.",
                  }),
                  e.jsx("li", {
                    children:
                      "Building mosques and Islamic centers in universities.",
                  }),
                  e.jsx("li", {
                    children:
                      "Providing scholarships for underprivileged Muslim students.",
                  }),
                  e.jsx("li", {
                    children:
                      "Engaging in national policy discussions on education and religion.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Challenges Faced",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children: "Despite its success, MSSN faced several challenges:",
              }),
              e.jsxs("ul", {
                className: "list-disc list-inside text-gray-700 mt-2",
                children: [
                  e.jsx("li", {
                    children:
                      "Opposition from school authorities banning Islamic activities.",
                  }),
                  e.jsx("li", {
                    children:
                      "Government regulations restricting religious groups in schools.",
                  }),
                  e.jsx("li", {
                    children:
                      "Funding difficulties for organizing events and building facilities.",
                  }),
                  e.jsx("li", {
                    children:
                      "Misrepresentation by some groups associating MSSN with extremism.",
                  }),
                  e.jsx("li", {
                    children:
                      "Internal leadership struggles causing temporary setbacks.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "MSSN in the Digital Age (2010s - Present)",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children:
                  "Today, MSSN has adapted to modern times by leveraging technology, digital platforms, and online learning. The organization now:",
              }),
              e.jsxs("ul", {
                className: "list-disc list-inside text-gray-700 mt-2",
                children: [
                  e.jsx("li", {
                    children:
                      "Uses social media to reach Muslim students nationwide.",
                  }),
                  e.jsx("li", {
                    children:
                      "Organizes virtual Islamic lectures and mentorship programs.",
                  }),
                  e.jsx("li", {
                    children:
                      "Advocates for Muslim students’ rights in universities and government policies.",
                  }),
                  e.jsx("li", {
                    children:
                      "Supports entrepreneurship and career development for Muslim youth.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "Key Contributions of MSSN",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children:
                  "MSSN has made significant contributions to Islamic education and student welfare, including:",
              }),
              e.jsxs("ul", {
                className: "list-disc list-inside text-gray-700 mt-2",
                children: [
                  e.jsx("li", {
                    children:
                      "Islamic awareness campaigns in Nigerian schools and universities.",
                  }),
                  e.jsx("li", {
                    children:
                      "National Qur’an competitions and Islamic knowledge contests.",
                  }),
                  e.jsx("li", {
                    children:
                      "Scholarships and educational sponsorships for Muslim students.",
                  }),
                  e.jsx("li", {
                    children:
                      "Community service programs to support orphans and the less privileged.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-6",
            children: [
              e.jsx("h2", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "The Future of MSSN",
              }),
              e.jsx("p", {
                className: "text-gray-700",
                children:
                  "The organization continues to expand with a focus on technology, education, and youth empowerment. Future plans include:",
              }),
              e.jsxs("ul", {
                className: "list-disc list-inside text-gray-700 mt-2",
                children: [
                  e.jsx("li", {
                    children:
                      "Building Islamic digital learning platforms for students.",
                  }),
                  e.jsx("li", {
                    children:
                      "Strengthening political and legal advocacy for Muslim students’ rights.",
                  }),
                  e.jsx("li", {
                    children:
                      "Encouraging Muslim youth entrepreneurship and career growth.",
                  }),
                  e.jsx("li", {
                    children:
                      "Expanding MSSN chapters into rural and underserved areas.",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("section", {
            className: "mb-6",
            children: e.jsx("p", {
              className: "text-gray-700",
              children:
                "MSSN remains a pillar of Islamic student activism in Nigeria. It continues to promote academic excellence, Islamic knowledge, and student welfare across all levels of education.",
            }),
          }),
        ],
      }),
    }),
  es = () => {
    const a = [
        {
          id: 1,
          name: "ABDALLAH MUHAMMAD",
          position: "AMIR",
          department: "MBBS",
          level: "400",
        },
        {
          id: 2,
          name: "AMINULLAH BIOKU",
          position: "NAIBUL AMIR ADMIN",
          department: "PHARMACY",
          level: "400",
        },
        {
          id: 3,
          name: "MUSLIM RIKIJI",
          position: "NAIBUL AMIR DA'AWAH",
          department: "PETROLEUM ENGINEERING",
          level: "500",
        },
        {
          id: 19,
          name: "RAPHAT ATOYEBI",
          position: "AMIRA",
          department: "PHARMACY",
          level: "500",
        },
        {
          id: 20,
          name: "MISTURAH SADIQ",
          position: "NAIBATUL AMIRA ADMIN",
          department: "NURSING",
          level: "400",
        },
        {
          id: 21,
          name: "SALMA IDRIS",
          position: "NAIBATUL AMIRA DA'AWAH",
          department: "NURSING",
          level: "400",
        },
        {
          id: 4,
          name: "ABDUR-RAHMAN AWOJOBI",
          position: "GENERAL SECETARY",
          department: "LAW",
          level: "400",
        },
        {
          id: 5,
          name: "AKANBI ABDULBAAR",
          position: "ASS. GENERAL SECETARY",
          department: "ARCHITECTURE",
          level: "300",
        },
        {
          id: 22,
          name: "AISHA OROPO",
          position: "GENERAL SECETARY",
          department: "MBBS",
          level: "400",
        },
        {
          id: 6,
          name: "ALIYU IBRAHIM",
          position: "PUBLIC RELATION OFFICER",
          department: "COMPUTER ENGINEERING",
          level: "400",
        },
        {
          id: 23,
          name: "MURDHIYYA ADEYINKA",
          position: "PUBLIC RELATION OFFICER",
          department: "BIOCHEMISTRY",
          level: "300",
        },
        {
          id: 24,
          name: "HIQMA YEKEEN",
          position: "FINANCIAL SECETARY",
          department: "MBBS",
          level: "400",
        },
        {
          id: 7,
          name: "IBRAHIM MULERO",
          position: "FINANCIAL SECETARY",
          department: "ENGINEERING",
          level: "300",
        },
        {
          id: 8,
          name: "IBRAHIM ABUBAKAR",
          position: "ASS. FINANCIAL SECETARY",
          department: "COMPUTER SCIENCE",
          level: "300",
        },
        {
          id: 9,
          name: "WALIYULLAH ADERIBIGBE",
          position: "ASSET MAINTAINACE OFFICER I",
          department: "AERONAUTICAL ENGINEERING",
          level: "300",
        },
        {
          id: 10,
          name: "MUKHTAR HABEEBU",
          position: "ASSET MAINTAINANCE OFFICER II",
          department: "ENGINEERING",
          level: "300",
        },
        {
          id: 11,
          name: "IBRAHIM SANYA",
          position: "WELFARE OFFICER I",
          department: "MECHATRONICS ENGINEERING",
          level: "300",
        },
        {
          id: 12,
          name: "MOHAMMED JAMILU ABUBAKAR",
          position: "WELFARE OFFICER II",
          department: "CHEMICAL ENGINEERING",
          level: "200",
        },
        {
          id: 13,
          name: "IBRAHIM SANUSI",
          position: "DIRECTOR OF STUDIES",
          department: "MBBS",
          level: "300",
        },
        {
          id: 17,
          name: "NAZIR MUHAMMAD",
          position: "DAAWAH COORDINATOR I",
          department: "MBBS",
          level: "200",
        },
        {
          id: 18,
          name: "ABDULHALIM MUSTAPHA",
          position: "DAAWAH COORDINATOR II",
          department: "ENGINEERING",
          level: "200",
        },
        {
          id: 14,
          name: "ABUBAKAR BABABE",
          position: "MUADHIN",
          department: "ECONOMICS",
          level: "200",
        },
        {
          id: 33,
          name: "YAHAYA ABDULLAHI",
          position: "MUADHIN II",
          department: "COMPUTER SCIENCE",
          level: "200",
        },
        {
          id: 15,
          name: "ABDULROQEEB SHITTU",
          position: "EDITOR IN CHIEF I",
          department: "MBBS",
          level: "500",
        },
        {
          id: 16,
          name: "MOGAJI MOHAMMED",
          position: "EDITOR IN CHIEF II",
          department: "COMPUTER SCIENCE",
          level: "400",
        },
        {
          id: 25,
          name: "AZEEZAT SAIDU",
          position: "TREASURER",
          department: "MBBS",
          level: "400",
        },
        {
          id: 26,
          name: "AISHA ADEBAYO",
          position: "ASSET MAINTAINAGE OFFICER I",
          department: "ENGINEERING",
          level: "300",
        },
        {
          id: 27,
          name: "MASIDAT OLALEYE",
          position: "ASSET MAINTAINANCE OFFICER II",
          department: "NURSING",
          level: "200",
        },
        {
          id: 28,
          name: "AISHA DAUDA",
          position: "DIRECTOR OF STUDIES",
          department: "PHARMACY",
          level: "500",
        },
        {
          id: 29,
          name: "ZAYTOON UMAR",
          position: "WELFARE OFFICER I",
          department: "PHARMACY",
          level: "400",
        },
        {
          id: 30,
          name: "IKRAM ABDULSHAKUR",
          position: "WELFARE OFFICER II",
          department: "MBBS",
          level: "200",
        },
        {
          id: 31,
          name: "HALIMA ABDULSALAM",
          position: "SISTERS CIRCLE COORDINATOR I",
          department: "ANATOMY",
          level: "300",
        },
        {
          id: 32,
          name: "KHADIJA BAPPA",
          position: "SISTERS CIRCLE COORDINATOR II",
          department: "MBBS",
          level: "300",
        },
      ],
      o = [
        {
          id: 1,
          name: "MUSTAPHA LAWAL OLAMIDE",
          position: "ADVISOR",
          department: "MECHATRONICS ENGINEERING",
          level: "400",
        },
        {
          id: 2,
          name: "ABDULRAUF HANEEF",
          position: "ADVISOR",
          department: "PHARMACY",
          level: "400",
        },
        {
          id: 3,
          name: "SODIQ OJO",
          position: "ADVISOR",
          department: "COMPUTER SCIENCE",
          level: "400",
        },
        {
          id: 4,
          name: "ABIDEEN YASMIN",
          position: "ADVISOR",
          department: "PHARMACY",
          level: "400",
        },
      ];
    return e.jsxs("div", {
      className: "max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md",
      children: [
        e.jsxs("div", {
          children: [
            e.jsxs("h1", {
              className: "text-2xl font-bold text-center mb-6",
              children: [
                "Meet the Executives of",
                " ",
                e.jsx("span", {
                  className: "text-primary-dark underline",
                  children: "2025/2026",
                }),
              ],
            }),
            e.jsx("div", {
              className: "overflow-x-auto rounded-xl",
              children: e.jsxs("table", {
                className: "min-w-full border-collapse",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-primary text-gray-100",
                      children: [
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "S/N",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Portfolio",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Executive's name",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Department/Faculty",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Level",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: a.map((s, l) =>
                      e.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50",
                          children: [
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: l + 1,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border  whitespace-nowrap",
                              children: s.position,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.name,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.department,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.level,
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "mt-8",
          children: [
            e.jsx("h1", {
              className: "text-2xl font-bold text-center mb-6",
              children: "Meet the Ex-Officials",
            }),
            e.jsx("div", {
              className: "overflow-x-auto rounded-xl",
              children: e.jsxs("table", {
                className: "min-w-full border-collapse",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-primary text-gray-100",
                      children: [
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "S/N",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Portfolio",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Executive's name",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Department/Faculty",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 border text-left",
                          children: "Level",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: o.map((s, l) =>
                      e.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50",
                          children: [
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: l + 1,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border  whitespace-nowrap",
                              children: s.position,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.name,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.department,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 border",
                              children: s.level,
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  ss = () =>
    e.jsxs("div", {
      className: " min-h-screen py-10 px-4 sm:pt-24",
      children: [
        e.jsxs("div", {
          className: "max-w-4xl mx-auto bg-white p-6",
          children: [
            e.jsx("h1", {
              className: "text-3xl font-bold text-center text-green-600 mb-6",
              children: "History of MSSN ABUAD",
            }),
            e.jsxs("section", {
              className: "mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-800 mb-2",
                  children: "Introduction",
                }),
                e.jsxs("p", {
                  className: "text-gray-700",
                  children: [
                    "The",
                    " ",
                    e.jsx("strong", {
                      children:
                        "Muslim Students' Society of Nigeria (MSSN) ABUAD",
                    }),
                    " is a branch of MSSN operating at Afe Babalola University, Ado-Ekiti. It serves as the main Islamic student body, promoting Islamic teachings, unity, and welfare among Muslim students within the university.",
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-800 mb-2",
                  children: "Establishment and Growth",
                }),
                e.jsx("p", {
                  className: "text-gray-700",
                  children:
                    "MSSN ABUAD was established in the early years of the university's foundation to cater to the spiritual and social needs of Muslim students. Over time, it has grown into an active and well-organized body within the campus, recognized by both the university management and the national MSSN leadership.",
                }),
              ],
            }),
            e.jsxs("section", {
              className: "mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-800 mb-2",
                  children: "Activities and Contributions",
                }),
                e.jsx("p", {
                  className: "text-gray-700",
                  children:
                    "MSSN ABUAD plays a crucial role in fostering Islamic awareness and unity among students. Some of its key activities include:",
                }),
                e.jsxs("ul", {
                  className: "list-disc list-inside text-gray-700 mt-2",
                  children: [
                    e.jsx("li", {
                      children:
                        "Jumu'ah prayers and weekly halaqahs for spiritual growth.",
                    }),
                    e.jsx("li", {
                      children:
                        "Islamic lectures and seminars featuring guest speakers.",
                    }),
                    e.jsx("li", {
                      children: "Ramadan programs, including Iftar sessions.",
                    }),
                    e.jsx("li", {
                      children:
                        "Islamic Awareness Week to promote Islamic knowledge.",
                    }),
                    e.jsx("li", {
                      children: "Charity and community service initiatives.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-800 mb-2",
                  children: "Challenges and Future Goals",
                }),
                e.jsx("p", {
                  className: "text-gray-700",
                  children:
                    "MSSN ABUAD has faced challenges such as securing a permanent mosque structure, funding for activities, and ensuring continuous student participation. However, the society remains dedicated to expanding its reach and enhancing the welfare of Muslim students at ABUAD.",
                }),
              ],
            }),
            e.jsx("section", {
              className: "mb-6",
              children: e.jsx("p", {
                className: "text-gray-700",
                children:
                  "MSSN ABUAD continues to be a pillar of Islamic guidance and support for Muslim students, fostering a strong Islamic identity within the university community.",
              }),
            }),
          ],
        }),
        e.jsx(es, {}),
      ],
    }),
  as = () => {
    const {
      numberOfBlogs: a,
      numberOfEvents: o,
      numberOfNews: s,
      numberOfPendingQuestions: l,
      numberOfProducts: n,
    } = i.useContext(Y);
    return e.jsxs("div", {
      className: "grid md:grid-cols-3 lg:grid-cols-4 gap-6",
      children: [
        e.jsxs("div", {
          className:
            "bg-primary/5 rounded-lg p-6 lg:row-span-2 lg:flex flex-col lg:justify-center lg:items-center",
          children: [
            e.jsx("h3", {
              className: "font-semibold mb-2",
              children: "Total Members",
            }),
            e.jsx("p", { className: "text-3xl font-bold", children: "-" }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-primary/5 rounded-lg p-6",
          children: [
            e.jsx("h3", {
              className: "font-semibold mb-2",
              children: "Pending Questions",
            }),
            e.jsx("p", { className: "text-3xl font-bold", children: l || 0 }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-primary/5 rounded-lg p-6",
          children: [
            e.jsx("h3", {
              className: "font-semibold mb-2",
              children: "Available Products",
            }),
            e.jsx("p", { className: "text-3xl font-bold", children: n || 0 }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-primary/5 rounded-lg p-6",
          children: [
            e.jsx("h3", {
              className: "font-semibold mb-2",
              children: "Upcoming Events",
            }),
            e.jsx("p", { className: "text-3xl font-bold", children: o || 0 }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-primary/5 rounded-lg p-6",
          children: [
            e.jsx("h3", { className: "font-semibold mb-2", children: "Blogs" }),
            e.jsx("p", { className: "text-3xl font-bold", children: a || 0 }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-primary/5 rounded-lg p-6",
          children: [
            e.jsx("h3", { className: "font-semibold mb-2", children: "News" }),
            e.jsx("p", { className: "text-3xl font-bold", children: s || 0 }),
          ],
        }),
      ],
    });
  },
  Y = i.createContext({}),
  ts = () => {
    const [a, o] = i.useState([]),
      [s, l] = i.useState(null),
      [n, t] = i.useState(null),
      [r, c] = i.useState(null),
      [d, v] = i.useState(null),
      [u, m] = i.useState(0);
    return (
      i.useEffect(() => {
        (async () => {
          var f, x, A, b;
          try {
            const [y, S, M, p] = await Promise.all([
              g.get("https://mssn.pythonanywhere.com/api/events"),
              g.get("https://mssn.pythonanywhere.com/api/blogs"),
              g.get("https://mssn.pythonanywhere.com/api/products"),
              g.get("https://mssn.pythonanywhere.com/api/news"),
            ]);
            l((f = y.data) == null ? void 0 : f.length),
              t((x = S.data) == null ? void 0 : x.length),
              c((A = M.data) == null ? void 0 : A.length),
              v((b = p.data) == null ? void 0 : b.length);
          } catch (y) {
            console.error("Error fetching admin dashboard data:", y);
          }
        })();
      }, [n, s, d, r]),
      e.jsx(Y.Provider, {
        value: {
          numberOfBlogs: n,
          numberOfEvents: s,
          numberOfNews: d,
          numberOfProducts: r,
          numberOfPendingQuestions: u,
        },
        children: e.jsx(as, {}),
      })
    );
  },
  rs = () => {
    const [a, o] = i.useState(""),
      [s, l] = i.useState(0),
      [n, t] = i.useState(""),
      [r, c] = i.useState(""),
      [d, v] = i.useState([]),
      [u, m] = i.useState(!1),
      [h, f] = i.useState(!0);
    i.useEffect(() => {
      (async () => {
        try {
          const y = localStorage.getItem("auth_token"),
            S = await g.get("https://mssn.pythonanywhere.com/api/products", {
              headers: { Authorization: `Bearer ${y}` },
            });
          v(S.data);
        } catch (y) {
          console.error("Error fetching products:", y);
        } finally {
          f(!1);
        }
      })();
    }, [d]);
    const x = async (b) => {
        b.preventDefault();
        try {
          const y = localStorage.getItem("auth_token");
          if (
            (await g.post(
              "https://mssn.pythonanywhere.com/api/products",
              { name: a, price: s, description: n, image_url: r },
              { headers: { Authorization: `Bearer ${y}` } }
            ),
            N.success("Product added successfully!"),
            !r == "")
          ) {
            o(""), l(0), t(""), c("");
            const S = await g.get(
              "https://mssn.pythonanywhere.com/api/products",
              { headers: { Authorization: `Bearer ${y}` } }
            );
            v(S.data), m(!1);
          }
        } catch (y) {
          console.error("Error adding product:", y),
            N.error("An error occurred");
        }
      },
      A = async (b) => {
        try {
          const y = localStorage.getItem("auth_token");
          await g.delete(`https://mssn.pythonanywhere.com/api/products/${b}`, {
            headers: { Authorization: `Bearer ${y}` },
          }),
            N.success("Product deleted successfully!");
        } catch (y) {
          console.error("Error deleting product:", y),
            N.success("An error occurred while deleting the product");
        }
      };
    return h
      ? e.jsxs("div", {
          className: "pt-32 pb-16 container text-center",
          children: [
            e.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
            }),
            e.jsx("p", {
              className: "mt-4",
              children: "Loading store products...",
            }),
          ],
        })
      : e.jsxs("div", {
          className: "p-6",
          children: [
            e.jsxs("div", {
              className: "mb-8 flex justify-between",
              children: [
                e.jsx("h3", {
                  className: "text-xl font-bold mb-4",
                  children: "Products",
                }),
                e.jsx("button", {
                  type: "submit",
                  className:
                    "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                  onClick: () => m(!0),
                  children: "Add New Product",
                }),
              ],
            }),
            e.jsx("div", {
              className: "overflow-x-auto",
              children: e.jsxs("table", {
                className:
                  "min-w-full bg-white shadow-md rounded-lg overflow-hidden",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-gray-100",
                      children: [
                        e.jsx("th", {
                          className:
                            "px-4 py-3 text-left text-sm font-medium text-gray-700",
                          children: "Image",
                        }),
                        e.jsx("th", {
                          className:
                            "px-4 py-3 text-left text-sm font-medium text-gray-700",
                          children: "Product Name",
                        }),
                        e.jsx("th", {
                          className:
                            "px-4 py-3 text-left text-sm font-medium text-gray-700",
                          children: "Price",
                        }),
                        e.jsx("th", {
                          className:
                            "px-4 py-3 text-left text-sm font-medium text-gray-700",
                          children: "Description",
                        }),
                        e.jsx("th", {
                          className:
                            "px-4 py-3 text-center text-sm font-medium text-gray-700",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    className: "divide-y divide-gray-200",
                    children: d.map((b) =>
                      e.jsxs(
                        "tr",
                        {
                          children: [
                            e.jsx("td", {
                              className: "px-4 py-3",
                              children: e.jsx("img", {
                                src:
                                  b.image_url ||
                                  "https://via.placeholder.com/50",
                                alt: b.name,
                                className: "w-12 h-12 object-cover rounded",
                              }),
                            }),
                            e.jsx("td", {
                              className: "px-4 py-3 text-gray-700",
                              children: b.name,
                            }),
                            e.jsxs("td", {
                              className: "px-4 py-3 text-gray-700",
                              children: ["N", b.price],
                            }),
                            e.jsx("td", {
                              className: "px-4 py-3 text-gray-700",
                              children: b.description,
                            }),
                            e.jsx("td", {
                              className: "px-4 py-3 text-center",
                              children: e.jsx("button", {
                                className:
                                  "text-white text-sm font-medium px-3 py-2 rounded",
                                onClick: () => A(b.id),
                                children: e.jsx(ue, { color: " #dc2626" }),
                              }),
                            }),
                          ],
                        },
                        b.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            u &&
              e.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center",
                children: e.jsxs("div", {
                  className: "bg-white p-6 rounded-lg shadow-lg w-96",
                  children: [
                    e.jsx("h3", {
                      className: "text-xl font-semibold",
                      children: "Add New Product",
                    }),
                    e.jsx("h2", {
                      className: "mb-4",
                      children: "You mst fill all fields to add a product",
                    }),
                    e.jsxs("form", {
                      onSubmit: x,
                      className: "space-y-4",
                      children: [
                        e.jsx("input", {
                          type: "text",
                          placeholder: "Product Name",
                          value: a,
                          onChange: (b) => o(b.target.value),
                          className: "w-full p-2 border rounded mb-2",
                          required: !0,
                        }),
                        e.jsx("input", {
                          type: "number",
                          placeholder: "Price",
                          value: s,
                          onChange: (b) => l(b.target.value),
                          className: "w-full p-2 border rounded",
                          required: !0,
                        }),
                        e.jsx("textarea", {
                          name: "description",
                          value: n,
                          onChange: (b) => t(b.target.value),
                          maxLength: 120,
                          placeholder: "Description max of 100 characters",
                          className: "w-full p-2 border rounded mb-2",
                        }),
                        e.jsx("input", {
                          type: "text",
                          placeholder: "Image URL",
                          value: r,
                          onChange: (b) => c(b.target.value),
                          className: "w-full p-2 border rounded",
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between mt-4",
                          children: [
                            e.jsx("button", {
                              onClick: () => m(!1),
                              className:
                                "bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                              children: "Cancel",
                            }),
                            e.jsx("button", {
                              type: "submit",
                              className:
                                "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                              children: "Add Product",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            e.jsx(k, {}),
          ],
        });
  },
  ns = () => {
    const [a, o] = i.useState({
      fajrAdhan: "",
      fajrIqama: "",
      dhuhrAdhan: "",
      dhuhrIqama: "",
      asrAdhan: "",
      asrIqama: "",
      maghribAdhan: "",
      maghribIqama: "",
      ishaAdhan: "",
      ishaIqama: "",
      jumuahAdhan: "",
      jumuahIqama: "",
    });
    i.useEffect(() => {
      (async () => {
        var t, r;
        try {
          const c = localStorage.getItem("auth_token"),
            d = await g.get(
              "https://mssn.pythonanywhere.com/api/prayer-times",
              { headers: { Authorization: `Bearer ${c}` } }
            );
          d.data &&
            o({
              fajrAdhan: d.data.fajr.adhan,
              fajrIqama: d.data.fajr.iqama,
              dhuhrAdhan: d.data.dhuhr.adhan,
              dhuhrIqama: d.data.dhuhr.iqama,
              asrAdhan: d.data.asr.adhan,
              asrIqama: d.data.asr.iqama,
              maghribAdhan: d.data.maghrib.adhan,
              maghribIqama: d.data.maghrib.iqama,
              ishaAdhan: d.data.isha.adhan,
              ishaIqama: d.data.isha.iqama,
              jumuahAdhan:
                ((t = d.data.jumuah) == null ? void 0 : t.adhan) || "",
              jumuahIqama:
                ((r = d.data.jumuah) == null ? void 0 : r.iqama) || "",
            });
        } catch {
          N.error("Failed to fetch prayer times.");
        }
      })();
    }, []);
    const s = async (n) => {
        var t, r, c;
        n.preventDefault();
        try {
          const d = localStorage.getItem("auth_token");
          if (!d) {
            N.warn("Please login first");
            return;
          }
          const v = {
            fajr_adhan: a.fajrAdhan || "00:00",
            fajr_iqama: a.fajrIqama || "00:00",
            dhuhr_adhan: a.dhuhrAdhan || "00:00",
            dhuhr_iqama: a.dhuhrIqama || "00:00",
            asr_adhan: a.asrAdhan || "00:00",
            asr_iqama: a.asrIqama || "00:00",
            maghrib_adhan: a.maghribAdhan || "00:00",
            maghrib_iqama: a.maghribIqama || "00:00",
            isha_adhan: a.ishaAdhan || "00:00",
            isha_iqama: a.ishaIqama || "00:00",
            jumuah_adhan: a.jumuahAdhan || null,
            jumuah_iqama: a.jumuahIqama || null,
          };
          console.log("Submitting:", v);
          const u = await g.post(
            "https://mssn.pythonanywhere.com/api/prayer-times",
            v,
            {
              headers: {
                Authorization: `Bearer ${d}`,
                "Content-Type": "application/json",
              },
            }
          );
          N.success("Prayer times updated successfully!"),
            window.location.reload();
        } catch (d) {
          console.error("Full error:", d),
            console.error(
              "Error response:",
              (t = d.response) == null ? void 0 : t.data
            ),
            alert(
              `Error: ${
                ((c = (r = d.response) == null ? void 0 : r.data) == null
                  ? void 0
                  : c.error) || d.message
              }`
            );
        }
      },
      l = (n) => {
        const { name: t, value: r } = n.target;
        o({ ...a, [t]: r });
      };
    return e.jsxs("div", {
      className: "p-6",
      children: [
        e.jsx("h2", {
          className: "text-2xl font-bold mb-6 text-primary",
          children: "Manage Prayer Times",
        }),
        e.jsx("p", {
          className: "text-gray-600 mb-8",
          children:
            "Update prayer times. Changes will reflect immediately on the user side.",
        }),
        e.jsxs("form", {
          onSubmit: s,
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Fajr Adhan",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "fajrAdhan",
                  value: a.fajrAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Fajr Iqama",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "fajrIqama",
                  value: a.fajrIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Dhuhr Adhan",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "dhuhrAdhan",
                  value: a.dhuhrAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Dhuhr Iqama",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "dhuhrIqama",
                  value: a.dhuhrIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Asr Adhan",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "asrAdhan",
                  value: a.asrAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Asr Iqama",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "asrIqama",
                  value: a.asrIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Maghrib Adhan",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "maghribAdhan",
                  value: a.maghribAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Maghrib Iqama",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "maghribIqama",
                  value: a.maghribIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Isha Adhan",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "ishaAdhan",
                  value: a.ishaAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Isha Iqama",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "ishaIqama",
                  value: a.ishaIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                  required: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Jumu'ah Adhan (Optional)",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "jumuahAdhan",
                  value: a.jumuahAdhan,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("label", {
                  className: "mb-2 font-medium text-gray-700",
                  children: "Jumu'ah Iqama (Optional)",
                }),
                e.jsx("input", {
                  type: "time",
                  name: "jumuahIqama",
                  value: a.jumuahIqama,
                  onChange: l,
                  className:
                    "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                }),
              ],
            }),
            e.jsx("div", {
              className: "md:col-span-2",
              children: e.jsx("button", {
                type: "submit",
                className:
                  "w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors",
                children: "Save Prayer Times",
              }),
            }),
          ],
        }),
      ],
    });
  },
  ls = () => {
    const [a, o] = i.useState(!1),
      [s, l] = i.useState(""),
      [n] = i.useState([
        {
          id: 1,
          text: "What is the significance of prayer in Islam?",
          email: "sample1mail@mail.com",
          date: "2024-04-01",
          status: "Pending",
        },
        {
          id: 2,
          text: "How do I perform Wudu correctly?",
          email: "sample2mail@mail.com",
          date: "2024-04-02",
          status: "Answered",
        },
        {
          id: 3,
          text: "What are the benefits of fasting in Ramadan?",
          email: "sample3mail@mail.com",
          date: "2024-04-03",
          status: "Pending",
        },
      ]),
      [t, r] = i.useState({ question: "", answer: "" }),
      c = (u) => {
        const { name: m, value: h } = u.target;
        r({ ...t, [m]: h });
      },
      d = n.filter((u) => u.text.toLowerCase().includes(s.toLowerCase())),
      v = async (u) => {
        u.preventDefault();
      };
    return e.jsxs("div", {
      className: "p-6",
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-y-4",
          children: [
            e.jsx("h2", {
              className: "text-2xl font-bold text-primary",
              children: "Q&A Moderation",
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Search questions word...",
              value: s,
              onChange: (u) => l(u.target.value),
              className:
                "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
            }),
          ],
        }),
        e.jsx("p", {
          className: "text-gray-600 mb-4",
          children:
            "This section allows you to moderate and manage questions and answers.",
        }),
        e.jsx("div", {
          className: "overflow-x-auto",
          children: e.jsxs("table", {
            className:
              "min-w-full bg-white shadow-md rounded-lg overflow-hidden",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  className: "bg-gray-100",
                  children: [
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Question",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Email",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Date",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-center text-sm font-medium text-gray-700",
                      children: "Status",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-center text-sm font-medium text-gray-700",
                      children: "Actions",
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                className: "divide-y divide-gray-200",
                children: d.map((u) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: u.text,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: u.email,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: u.date,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-center",
                          children: e.jsx("span", {
                            className: `px-2 py-1 rounded-full text-xs font-semibold ${
                              u.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`,
                            children: u.status,
                          }),
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-center",
                          children: e.jsx("button", {
                            className: `text-white text-sm font-medium px-3 py-1 rounded mr-2 ${
                              u.status === "Answered"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600"
                            }`,
                            disabled: u.status === "Answered",
                            onClick: () => o(!0),
                            children: "Answer",
                          }),
                        }),
                      ],
                    },
                    u.id
                  )
                ),
              }),
            ],
          }),
        }),
        a &&
          e.jsx("div", {
            className:
              "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center",
            children: e.jsxs("div", {
              className: "bg-white p-6 rounded-lg shadow-lg w-96",
              children: [
                e.jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Add New Product",
                }),
                e.jsx("h2", {
                  className: "mb-4",
                  children: "You mst fill all fields to add a product",
                }),
                e.jsxs("form", {
                  onSubmit: v,
                  className: "space-y-4",
                  children: [
                    e.jsx("input", {
                      type: "text",
                      placeholder: "Question",
                      value: t.question,
                      onChange: c,
                      className: "w-full p-2 border rounded mb-2",
                      required: !0,
                    }),
                    e.jsx("textarea", {
                      name: "answer",
                      value: t.answer,
                      onChange: c,
                      placeholder: "Answer",
                      className: "w-full p-2 border rounded mb-2",
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between mt-4",
                      children: [
                        e.jsx("button", {
                          onClick: () => o(!1),
                          className:
                            "bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                          children: "Cancel",
                        }),
                        e.jsx("button", {
                          type: "submit",
                          onClick: () => o(!0),
                          className:
                            "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                          children: "Submit Answer",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  is = () => {
    const [a, o] = i.useState(!1),
      [s, l] = i.useState([]),
      [n, t] = i.useState(!0),
      [r, c] = i.useState({
        title: "",
        summary: "",
        content: "",
        date: "",
        time: "",
        availability: "All members",
        image_url: "",
      });
    i.useEffect(() => {
      (async () => {
        try {
          const h = await g.get("https://mssn.pythonanywhere.com/api/events");
          l(h.data);
        } catch (h) {
          console.error("Error fetching events:", h);
        } finally {
          t(!1);
        }
      })();
    }, []);
    const d = (m) => {
        const { name: h, value: f } = m.target;
        c({ ...r, [h]: f });
      },
      v = async (m) => {
        var h, f;
        m.preventDefault();
        try {
          const x = localStorage.getItem("auth_token");
          await g.post("https://mssn.pythonanywhere.com/api/events", r, {
            headers: { Authorization: `Bearer ${x}` },
          });
          const A = await g.get("https://mssn.pythonanywhere.com/api/events");
          l(A.data),
            o(!1),
            c({
              title: "",
              summary: "",
              content: "",
              date: "",
              time: "",
              availability: "All members",
              image_url: "",
            }),
            N.success("Events added successfully!");
        } catch (x) {
          console.error("Error adding event:", x),
            console.log(
              `Error: ${
                ((f = (h = x.response) == null ? void 0 : h.data) == null
                  ? void 0
                  : f.error) || x.message
              }`
            ),
            N.error("Error adding event");
        }
      },
      u = async (m) => {
        var h, f;
        try {
          const x = localStorage.getItem("auth_token");
          await g.delete(`https://mssn.pythonanywhere.com/api/events/${m}`, {
            headers: { Authorization: `Bearer ${x}` },
          }),
            l(s.filter((A) => A.id !== m)),
            N.success("Deleted successfully");
        } catch (x) {
          console.error("Error deleting event:", x),
            N.error(
              `${
                ((f = (h = x.response) == null ? void 0 : h.data) == null
                  ? void 0
                  : f.error) || x.message
              }`
            );
        }
      };
    return n
      ? e.jsxs("div", {
          className: "pt-32 pb-16 container text-center",
          children: [
            e.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
            }),
            e.jsx("p", { className: "mt-4", children: "Loading Events..." }),
          ],
        })
      : e.jsxs("div", {
          className: "p-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center  justify-between  gap-y-4 mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-bold text-primary",
                  children: "Events Management",
                }),
                e.jsx("button", {
                  onClick: () => o(!0),
                  className:
                    "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors w-max",
                  children: "Add New Event",
                }),
              ],
            }),
            s.length > 0
              ? e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: s.map((m) =>
                    e.jsxs(
                      "div",
                      {
                        className: "bg-white rounded-xl shadow-lg p-4",
                        children: [
                          m.image_url &&
                            e.jsx("img", {
                              src: m.image_url,
                              alt: m.title,
                              className: "w-full h-40 object-cover rounded",
                            }),
                          e.jsx("h3", {
                            className: "text-xl font-semibold mt-4",
                            children: m.title,
                          }),
                          e.jsx("p", {
                            className: "text-gray-600 mt-2",
                            children: m.summary,
                          }),
                          e.jsxs("div", {
                            className: "mt-2 text-sm text-gray-500",
                            children: [
                              e.jsxs("p", { children: ["Date: ", m.date] }),
                              e.jsxs("p", { children: ["Time: ", m.time] }),
                              e.jsxs("p", {
                                children: ["Open to: ", m.availability],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: e.jsx("button", {
                              className:
                                "bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded",
                              onClick: () => u(m.id),
                              children: "Delete",
                            }),
                          }),
                        ],
                      },
                      m.id
                    )
                  ),
                })
              : e.jsx("p", {
                  className: "text-gray-600 mb-4",
                  children: " No Upcoming event",
                }),
            a &&
              e.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20",
                children: e.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                  children: [
                    e.jsx("h3", {
                      className: "text-xl font-semibold mb-4",
                      children: "Add New Event",
                    }),
                    e.jsxs("form", {
                      onSubmit: v,
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Event Title*",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "title",
                              value: r.title,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Summary (max 250 chars)*",
                            }),
                            e.jsx("textarea", {
                              name: "summary",
                              value: r.summary,
                              onChange: d,
                              maxLength: 250,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Location",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "content",
                              value: r.content,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("label", {
                                  className: "block text-gray-700 mb-1",
                                  children: "Event Date*",
                                }),
                                e.jsx("input", {
                                  type: "date",
                                  name: "date",
                                  value: r.date,
                                  onChange: d,
                                  className: "w-full p-2 border rounded",
                                  required: !0,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("label", {
                                  className: "block text-gray-700 mb-1",
                                  children: "Event Time*",
                                }),
                                e.jsx("input", {
                                  type: "time",
                                  name: "time",
                                  value: r.time,
                                  onChange: d,
                                  className: "w-full p-2 border rounded",
                                  required: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Availability*",
                            }),
                            e.jsxs("select", {
                              name: "availability",
                              value: r.availability,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              required: !0,
                              children: [
                                e.jsx("option", {
                                  value: "All members",
                                  children: "All members",
                                }),
                                e.jsx("option", {
                                  value: "Male members only",
                                  children: "Male members only",
                                }),
                                e.jsx("option", {
                                  value: "Female members only",
                                  children: "Female members only",
                                }),
                                e.jsx("option", {
                                  value: "Executives only",
                                  children: "Executives only",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Image URL",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "image_url",
                              value: r.image_url,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              placeholder: "https://example.com/image.jpg",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between mt-6",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => o(!1),
                              className:
                                "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                              children: "Cancel",
                            }),
                            e.jsx("button", {
                              type: "submit",
                              className:
                                "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg",
                              children: "Add Event",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  os = () => {
    const [a, o] = i.useState(!1),
      [s, l] = i.useState([]),
      [n, t] = i.useState(!0),
      [r, c] = i.useState(""),
      [d, v] = i.useState(""),
      [u, m] = i.useState(""),
      [h, f] = i.useState(""),
      [x, A] = i.useState(0),
      [b, y] = i.useState("");
    i.useEffect(() => {
      (async () => {
        try {
          const j = await g.get("https://mssn.pythonanywhere.com/api/blogs");
          l(j.data);
        } catch (j) {
          console.error("Error fetching blogs:", j);
        } finally {
          t(!1);
        }
      })();
    }, []);
    const S = async (p) => {
        p.preventDefault();
        try {
          const j = localStorage.getItem("auth_token");
          await g.post(
            "https://mssn.pythonanywhere.com/api/blogs",
            {
              title: r,
              author: d,
              content: u,
              summary: h,
              image_url: b || null,
              read_time: Number(x),
            },
            { headers: { Authorization: `Bearer ${j}` } }
          );
          const I = await g.get("https://mssn.pythonanywhere.com/api/blogs");
          l(I.data),
            o(!1),
            c(""),
            v(""),
            m(""),
            f(""),
            A(0),
            y(""),
            N.success("Blog post added successfully!");
        } catch (j) {
          N.error("Failed to add blog post. Please try again."),
            console.error("Error adding blog:", j);
        }
      },
      M = async (p) => {
        var j, I;
        try {
          const C = localStorage.getItem("auth_token");
          await g.delete(`https://mssn.pythonanywhere.com/api/blogs/${p}`, {
            headers: { Authorization: `Bearer ${C}` },
          }),
            l(s.filter((q) => q.id !== p)),
            N.success("Deleted successfully");
        } catch (C) {
          console.error("Error deleting blog:", C),
            N.error(
              `${
                ((I = (j = C.response) == null ? void 0 : j.data) == null
                  ? void 0
                  : I.error) || C.message
              }`
            );
        }
      };
    return n
      ? e.jsxs("div", {
          className: "pt-32 pb-16 container text-center",
          children: [
            e.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
            }),
            e.jsx("p", {
              className: "mt-4",
              children: "Loading blog posts...",
            }),
          ],
        })
      : e.jsxs("div", {
          className: "p-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-bold text-primary",
                  children: "Blogs",
                }),
                e.jsx("button", {
                  onClick: () => o(!0),
                  className:
                    "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors",
                  children: "Add Blog Post",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: s.map((p) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-xl shadow-lg overflow-hidden max-h-[450px]",
                    children: [
                      e.jsx("img", {
                        src:
                          p.image_url ||
                          "https://via.placeholder.com/500x300?text=Blog+Image",
                        alt: p.title,
                        className: "w-full h-40 object-cover",
                      }),
                      e.jsxs("div", {
                        className: "p-4",
                        children: [
                          e.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: p.title,
                          }),
                          e.jsx("p", {
                            className: "text-gray-600 mb-2",
                            children: p.summary,
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [e.jsx(F, { size: 16 }), p.author],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-sm text-gray-500 mt-2",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  e.jsx(B, { size: 16 }),
                                  new Date().toLocaleDateString(),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  e.jsx(D, { size: 16 }),
                                  p.read_time,
                                  " min read",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsx("button", {
                              className:
                                "bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded",
                              onClick: () => M(p.id),
                              children: "Delete",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  p.id
                )
              ),
            }),
            a &&
              e.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20",
                children: e.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                  children: [
                    e.jsx("h3", {
                      className: "text-xl font-semibold mb-4",
                      children: "Add New Blog Post",
                    }),
                    e.jsxs("form", {
                      onSubmit: S,
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Title*",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "title",
                              value: r,
                              onChange: (p) => c(p.target.value),
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Author*",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "author",
                              value: d,
                              onChange: (p) => v(p.target.value),
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Summary (max 100 chars)*",
                            }),
                            e.jsx("textarea", {
                              name: "summary",
                              value: h,
                              onChange: (p) => f(p.target.value),
                              maxLength: 100,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Blog Content*",
                            }),
                            e.jsx("textarea", {
                              name: "content",
                              value: u,
                              onChange: (p) => m(p.target.value),
                              className:
                                "w-full p-2 border rounded min-h-[200px]",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Approx read time (minutes)*",
                            }),
                            e.jsx("input", {
                              type: "number",
                              name: "read_time",
                              value: x,
                              onChange: (p) => A(p.target.value),
                              className: "w-full p-2 border rounded",
                              min: "1",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Image URL",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "image_url",
                              value: b,
                              onChange: (p) => y(p.target.value),
                              className: "w-full p-2 border rounded",
                              placeholder: "https://example.com/image.jpg",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between mt-6",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => o(!1),
                              className:
                                "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                              children: "Cancel",
                            }),
                            e.jsx("button", {
                              type: "submit",
                              className:
                                "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg",
                              children: "Add Blog Post",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  ds = () => {
    const [a, o] = i.useState(!1),
      [s, l] = i.useState([
        {
          id: 1,
          name: "MSSN ADMIN",
          email: "mssnabuad21@gmail.com",
          role: "Admin",
        },
      ]),
      n = async (r) => {
        r.preventDefault();
        try {
          const c = localStorage.getItem("auth_token");
          if (
            (await axios.post(
              "https://mssn.pythonanywhere.com/api/exco",
              { name, price, description, image_url },
              { headers: { Authorization: `Bearer ${c}` } }
            ),
            price,
            !image_url == "")
          ) {
            toast.success("EXCO added"),
              setName(""),
              setPrice(0),
              setDescription(""),
              setImageUrl("");
            const d = await axios.get(
              "https://mssn.pythonanywhere.com/api/exco",
              { headers: { Authorization: `Bearer ${c}` } }
            );
            setProducts(d.data), o(!1);
          }
        } catch (c) {
          console.error("Error adding product:", c),
            toast.error("An error occurred");
        }
      },
      t = (r) => {
        l(s.filter((c) => c.id !== r));
      };
    return e.jsxs("div", {
      className: "p-6",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            e.jsx("h2", {
              className: "text-2xl font-bold text-primary",
              children: "Member Management",
            }),
            e.jsx("button", {
              onClick: () => o(!0),
              className:
                "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors",
              children: "Add Member",
            }),
          ],
        }),
        e.jsx("p", {
          className: "text-gray-600 mb-4",
          children: "This section is for current EXCO members and Admin.",
        }),
        e.jsx("div", {
          className: "overflow-x-auto",
          children: e.jsxs("table", {
            className:
              "min-w-full bg-white shadow-md rounded-lg overflow-hidden",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  className: "bg-gray-100",
                  children: [
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Name",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Email",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                      children: "Role",
                    }),
                    e.jsx("th", {
                      className:
                        "px-4 py-3 text-center text-sm font-medium text-gray-700",
                      children: "Actions",
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                className: "divide-y divide-gray-200",
                children: s.map((r) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: r.name,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: r.email,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-gray-700",
                          children: r.role,
                        }),
                        e.jsx("td", {
                          className: "px-4 py-3 text-center",
                          children: e.jsx("button", {
                            className:
                              "bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded",
                            onClick: () => t(r.id),
                            children: "Remove",
                          }),
                        }),
                      ],
                    },
                    r.id
                  )
                ),
              }),
            ],
          }),
        }),
        a &&
          e.jsx("div", {
            className:
              "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center",
            children: e.jsxs("div", {
              className: "bg-white p-6 rounded-lg shadow-lg w-96",
              children: [
                e.jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Add New Product",
                }),
                e.jsx("h2", {
                  className: "mb-4",
                  children: "You mst fill all fields to add a product",
                }),
                e.jsxs("form", {
                  onSubmit: n,
                  className: "space-y-4",
                  children: [
                    e.jsx("input", {
                      type: "text",
                      placeholder: "Name",
                      className: "w-full p-2 border rounded mb-2",
                      required: !0,
                    }),
                    e.jsx("input", {
                      type: "email",
                      placeholder: "email",
                      className: "w-full p-2 border rounded mb-2",
                      required: !0,
                    }),
                    e.jsx("input", {
                      type: "text",
                      placeholder: "Role",
                      className: "w-full p-2 border rounded mb-2",
                      required: !0,
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between mt-4",
                      children: [
                        e.jsx("button", {
                          onClick: () => o(!1),
                          className:
                            "bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                          children: "Cancel",
                        }),
                        e.jsx("button", {
                          type: "submit",
                          className:
                            "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                          children: "Add Product",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  cs = () => {
    const [a, o] = i.useState(!1),
      [s, l] = i.useState([]),
      [n, t] = i.useState(!0),
      [r, c] = i.useState({
        title: "",
        author: "",
        news: "",
        summary: "",
        image_url: "",
      });
    i.useEffect(() => {
      (async () => {
        try {
          const h = await g.get("https://mssn.pythonanywhere.com/api/news");
          l(h.data);
        } catch (h) {
          console.error("Error fetching news:", h);
        } finally {
          t(!1);
        }
      })();
    }, []);
    const d = (m) => {
        const { name: h, value: f } = m.target;
        c({ ...r, [h]: f });
      },
      v = async (m) => {
        var h, f;
        m.preventDefault();
        try {
          const x = localStorage.getItem("auth_token");
          await g.post("https://mssn.pythonanywhere.com/api/news", r, {
            headers: { Authorization: `Bearer ${x}` },
          });
          const A = await g.get("https://mssn.pythonanywhere.com/api/news");
          l(A.data),
            o(!1),
            c({ title: "", author: "", blog: "", summary: "", image_url: "" }),
            N.success("News added successfully!");
        } catch (x) {
          console.error("Error adding blog:", x),
            N.error(
              `Error: ${
                ((f = (h = x.response) == null ? void 0 : h.data) == null
                  ? void 0
                  : f.error) || x.message
              }`
            );
        }
      },
      u = async (m) => {
        var h, f;
        try {
          const x = localStorage.getItem("auth_token");
          await g.delete(`https://mssn.pythonanywhere.com/api/news/${m}`, {
            headers: { Authorization: `Bearer ${x}` },
          }),
            l(s.filter((A) => A.id !== m)),
            N.success("Deleted successfully");
        } catch (x) {
          console.error("Error deleting blog:", x),
            N.error(
              `${
                ((f = (h = x.response) == null ? void 0 : h.data) == null
                  ? void 0
                  : f.error) || x.message
              }`
            );
        }
      };
    return n
      ? e.jsxs("div", {
          className: "pt-32 pb-16 container text-center",
          children: [
            e.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto",
            }),
            e.jsx("p", { className: "mt-4", children: "Loading News..." }),
          ],
        })
      : e.jsxs("div", {
          className: "p-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-bold text-primary",
                  children: "News Update",
                }),
                e.jsx("button", {
                  onClick: () => o(!0),
                  className:
                    "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors",
                  children: "Add Latest",
                }),
              ],
            }),
            s.length > 0
              ? e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: s.map((m) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-xl shadow-lg overflow-hidden",
                        children: [
                          e.jsx("img", {
                            src:
                              m.image_url ||
                              "https://via.placeholder.com/500x300?text=Blog+Image",
                            alt: m.title,
                            className: "w-full h-40 object-cover",
                          }),
                          e.jsxs("div", {
                            className: "p-4",
                            children: [
                              e.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: m.title,
                              }),
                              e.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: m.summary,
                              }),
                              e.jsxs("p", {
                                className: "text-gray-500 text-sm",
                                children: ["By ", m.author],
                              }),
                              e.jsx("div", {
                                className: "mt-4 flex justify-end",
                                children: e.jsx("button", {
                                  className:
                                    "bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded",
                                  onClick: () => u(m.id),
                                  children: "Delete",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      m.id
                    )
                  ),
                })
              : e.jsx("p", {
                  className: "text-gray-600 mb-4",
                  children: " No latest News",
                }),
            a &&
              e.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20",
                children: e.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                  children: [
                    e.jsx("h3", {
                      className: "text-xl font-semibold mb-4",
                      children: "Add Latest News",
                    }),
                    e.jsxs("form", {
                      onSubmit: v,
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Title*",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "title",
                              value: r.title,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Summary (max 250 chars)*",
                            }),
                            e.jsx("textarea", {
                              name: "summary",
                              value: r.summary,
                              onChange: d,
                              maxLength: 250,
                              className: "w-full p-2 border rounded",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "News Content*",
                            }),
                            e.jsx("textarea", {
                              name: "blog",
                              value: r.blog,
                              onChange: d,
                              className:
                                "w-full p-2 border rounded min-h-[200px]",
                              required: !0,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Source (not compulsory)",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "author",
                              value: r.author,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-gray-700 mb-1",
                              children: "Image URL",
                            }),
                            e.jsx("input", {
                              type: "text",
                              name: "image_url",
                              value: r.image_url,
                              onChange: d,
                              className: "w-full p-2 border rounded",
                              placeholder: "https://example.com/image.jpg",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between mt-6",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => o(!1),
                              className:
                                "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded",
                              children: "Cancel",
                            }),
                            e.jsx("button", {
                              type: "submit",
                              className:
                                "bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg",
                              children: "Add News",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  ms = () =>
    e.jsx("div", {
      className: "p-6",
      children: e.jsx("h1", {
        className: "text-3xl font-bold text-primary-dark  mb-8 ml-6",
        children: "Daily/Weekly Lectures Coming Soon",
      }),
    }),
  hs = () => {
    const [a, o] = i.useState("dashboard"),
      s = [
        { id: "dashboard", name: "Dashboard", icon: pe },
        { id: "prayer", name: "Prayer Time", icon: B },
        { id: "qanda", name: "Q&A", icon: H },
        { id: "news", name: "News", icon: ge },
        { id: "events", name: "Events", icon: B },
        { id: "blog", name: "Blog", icon: P },
        { id: "store", name: "Store", icon: be },
        { id: "lectures", name: "Lectures", icon: je },
        { id: "members", name: "Members", icon: R },
      ];
    return e.jsxs("div", {
      children: [
        e.jsx(V, {}),
        e.jsx("div", {
          className: "pt-32 min-h-screen bg-gray-50",
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsx(E, {
                to: "/login",
                children: e.jsx("h1", {
                  className: "text-4xl font-bold mb-8 ml-6",
                  children: "Admin Dashboard",
                }),
              }),
              e.jsxs("div", {
                className: "bg-white rounded-xl shadow-lg",
                children: [
                  e.jsx("div", {
                    className: "border-b",
                    children: e.jsx("div", {
                      className: "flex overflow-x-auto",
                      children: s.map((l) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => o(l.id),
                            className: `flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                              a === l.id
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-500 hover:text-primary"
                            }`,
                            children: [e.jsx(l.icon, { size: 20 }), l.name],
                          },
                          l.id
                        )
                      ),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "p-6",
                    children: [
                      a === "dashboard" && e.jsx(ts, {}),
                      a === "prayer" && e.jsx(ns, {}),
                      a === "store" && e.jsx(rs, {}),
                      a === "qanda" && e.jsx(ls, {}),
                      a === "events" && e.jsx(is, {}),
                      a === "blog" && e.jsx(os, {}),
                      a === "news" && e.jsx(cs, {}),
                      a === "lectures" && e.jsx(ms, {}),
                      a === "members" && e.jsx(ds, {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(k, {}),
      ],
    });
  },
  xs = () => {
    const [a, o] = i.useState(""),
      [s, l] = i.useState(""),
      n = ye(),
      t = async (r) => {
        r.preventDefault();
        try {
          const c = await g.post("https://mssn.pythonanywhere.com/api/login", {
            username: a,
            password: s,
          });
          if (c.status >= 200 && c.status < 300) {
            const { token: d } = c.data;
            N.success("Access granted"),
              localStorage.setItem("auth_token", d),
              n("/admin");
          }
        } catch (c) {
          c.response
            ? N.error(c.response.data.message || "An error occurred")
            : c.request
            ? N.error("No response from server. Please try again later.")
            : N.error("An unexpected error occurred."),
            console.error("Login error:", c);
        }
      };
    return e.jsxs("div", {
      className: "min-h-screen flex",
      children: [
        e.jsx(k, {}),
        e.jsx("div", {
          className: "hidden md:block w-1/2 bg-green-800 p-12 text-white",
          children: e.jsxs("div", {
            className: "flex flex-col justify-center items-center h-full",
            children: [
              e.jsx("div", {
                className: "max-w-32 mb-12",
                children: e.jsx("img", {
                  src: "/mssn-logo.jpeg",
                  alt: "MSSN",
                  className: "rounded-full overflow-hidden w-full",
                }),
              }),
              e.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Admin Login",
              }),
              e.jsx("p", {
                className: "text-xl text-gray-300 text-center",
                children:
                  '"Verily, the most beloved of people to Allah on the Day of Resurrection and the nearest to Him will be the just leader"',
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "w-full md:w-1/2 flex items-center justify-center p-8",
          children: e.jsxs("form", {
            id: "loginForm",
            className: "w-full max-w-md",
            onSubmit: t,
            children: [
              e.jsx("h2", {
                className: "text-3xl font-bold text-green-800 mb-8",
                children: "Welcome Admin",
              }),
              e.jsxs("div", {
                className: "mb-4",
                children: [
                  e.jsx("label", {
                    className: "block text-green-700 text-sm font-bold mb-2",
                    children: "Email",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Email",
                    value: a,
                    onChange: (r) => o(r.target.value),
                    className:
                      "w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none",
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mb-6",
                children: [
                  e.jsx("label", {
                    className: "block text-green-700 text-sm font-bold mb-2",
                    children: "Password",
                  }),
                  e.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    value: s,
                    onChange: (r) => l(r.target.value),
                    className:
                      "w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none",
                    required: !0,
                  }),
                ],
              }),
              e.jsx("button", {
                type: "submit",
                className:
                  "w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300",
                children: "Login",
              }),
            ],
          }),
        }),
      ],
    });
  },
  us = ({ children: a }) => {
    const [o, s] = i.useState(null);
    return (
      i.useEffect(() => {
        (async () => {
          var n;
          try {
            const t = localStorage.getItem("auth_token");
            if (!t) {
              s(!1);
              return;
            }
            const r = await g.get(
              "https://mssn.pythonanywhere.com/api/check-auth",
              { headers: { Authorization: `Bearer ${t}` } }
            );
            s(r.data.authenticated);
          } catch (t) {
            console.error(
              "Check-auth error:",
              ((n = t.response) == null ? void 0 : n.data) || t.message
            ),
              s(!1);
          }
        })();
      }, []),
      o === null
        ? e.jsx("div", { children: "Loading..." })
        : o
        ? a
        : e.jsx(ve, { to: "/login" })
    );
  },
  ps = () =>
    e.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: e.jsxs("div", {
        className: "text-center",
        children: [
          e.jsx("h1", {
            className: "text-4xl font-bold text-gray-800 mb-4",
            children: "404",
          }),
          e.jsx("p", {
            className: "text-xl text-gray-600",
            children: "Page Not Found",
          }),
          e.jsx("p", {
            className: "text-gray-500 mt-2",
            children: "The blog post you're looking for doesn't exist.",
          }),
        ],
      }),
    }),
  gs = ({ slugify: a }) => {
    const { id: o } = Ae(),
      [s, l] = i.useState(null),
      [n, t] = i.useState(!0);
    return (
      i.useEffect(() => {
        (async () => {
          try {
            const d = (await g.get("https://mssn.pythonanywhere.com/api/blogs"))
              .data;
            if (Array.isArray(d)) {
              const v = d.find((u) => a(u.title) === o);
              l(v || null);
            } else console.error("Unexpected response format:", d);
          } catch (c) {
            console.error("Error fetching the blog post:", c);
          } finally {
            t(!1);
          }
        })();
      }, [o]),
      n
        ? e.jsx("p", {
            className: "text-center text-green-600",
            children: "Loading...",
          })
        : s
        ? e.jsx("div", {
            className: "min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ",
            children: e.jsxs("div", {
              className: "max-w-3xl mx-auto mt-20",
              children: [
                e.jsxs("div", {
                  className: "mb-8",
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-4xl font-bold text-green-800 mb-4 leading-tight",
                      children: s.title,
                    }),
                    e.jsx("p", {
                      className: "text-lg text-green-700 mb-6",
                      children: s.summary,
                    }),
                    e.jsx("div", {
                      className: "w-full h-max",
                      children: e.jsx("img", {
                        src: s.image_url,
                        alt: s.title,
                        className: "w-full",
                      }),
                    }),
                    e.jsx("hr", {
                      className: "border-t-2 border-green-200 mb-6",
                    }),
                    e.jsxs("div", {
                      className:
                        "flex justify-between items-center text-green-700",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx("p", {
                              className: "font-medium",
                              children: "Author",
                            }),
                            e.jsx("p", {
                              className: "text-sm text-green-600",
                              children: "MSSN 2024/25",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-right",
                          children: [
                            e.jsxs("p", {
                              className: "font-medium",
                              children: [" ", s.author],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-green-600",
                              children: new Date().toLocaleDateString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("article", {
                  className: "prose prose-lg max-w-none text-green-900",
                  children: e.jsx("p", {
                    className: "mb-6 whitespace-pre-line",
                    children: s.blog,
                  }),
                }),
              ],
            }),
          })
        : e.jsx("p", {
            className: "text-center text-red-600",
            children: "Blog post not found.",
          })
    );
  },
  bs = () =>
    e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-green-800 text-white",
      children: e.jsxs("div", {
        className: "text-center p-8 max-w-lg",
        children: [
          e.jsx("h1", {
            className: "text-4xl font-bold mb-4",
            children: "Dawah Lectures",
          }),
          e.jsx("p", {
            className: "text-lg mb-6",
            children:
              "We are working diligently to bring you enriching Dawah lectures. Stay tuned for updates.",
          }),
          e.jsx(fe, { size: 120, className: "mx-auto" }),
        ],
      }),
    });
function js() {
  const a = (o) =>
    o
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  return e.jsx(K, {
    children: e.jsxs(we, {
      children: [
        e.jsxs(w, {
          element: e.jsx(Ee, {}),
          children: [
            e.jsx(w, { path: "/", element: e.jsx(We, {}) }),
            e.jsx(w, { path: "/mssn-history", element: e.jsx($e, {}) }),
            e.jsx(w, { path: "/mssn-abuad-history", element: e.jsx(ss, {}) }),
            e.jsx(w, { path: "/programs", element: e.jsx(Ye, {}) }),
            e.jsx(w, { path: "/store", element: e.jsx(Ge, {}) }),
            e.jsx(w, { path: "/forum", element: e.jsx(_e, {}) }),
            e.jsx(w, { path: "/blog", element: e.jsx(Ke, { slugify: a }) }),
            e.jsx(w, { path: "/blog/:id", element: e.jsx(gs, { slugify: a }) }),
            e.jsx(w, { path: "/lectures", element: e.jsx(bs, {}) }),
            e.jsx(w, { path: "/events", element: e.jsx(Je, {}) }),
            e.jsx(w, { path: "/donate", element: e.jsx(Ze, {}) }),
            e.jsx(w, { path: "/news", element: e.jsx(Xe, {}) }),
          ],
        }),
        e.jsx(w, {
          path: "/admin",
          element: e.jsx(us, { children: e.jsx(hs, {}) }),
        }),
        e.jsx(w, { path: "/login", element: e.jsx(xs, {}) }),
        e.jsx(w, { path: "*", element: e.jsx(ps, {}) }),
      ],
    }),
  });
}
_(document.getElementById("root")).render(
  e.jsx(i.StrictMode, { children: e.jsx(js, {}) })
);
