import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Iqbal Rizky Ramdhan",
    description: "Android & Backend Developer",

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Experience", link: "/experience" },
            { text: "Skills", link: "/skills" },
            { text: "Education", link: "/education" },
            { text: "CV", link: "/cv" }
        ],

        sidebar: [
            {
                text: "Profile",
                items: [
                    { text: "Overview", link: "/" },
                    { text: "Experience", link: "/experience" },
                    { text: "Skills", link: "/skills" },
                    { text: "Education", link: "/education" },
                    { text: "CV", link: "/cv" }
                ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/ntaloventi" },
            { icon: "youtube", link: "https://ntaloventi.my.id" },
            { icon: "linkedin", link: "https://www.linkedin.com/in/iqbal-rizky-9619a3143" }
        ]
    }
})