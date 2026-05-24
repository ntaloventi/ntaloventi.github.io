import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Iqbal Rizky",
    description: "Android & Backend Developer",

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Experience", link: "/experience" },
            { text: "Skills", link: "/skills" },
            { text: "Projects", link: "/projects" },
            { text: "Education", link: "/education" }
        ],

        sidebar: [
            {
                text: "Profile",
                items: [
                    { text: "Overview", link: "/" },
                    { text: "Experience", link: "/experience" },
                    { text: "Skills", link: "/skills" },
                    { text: "Projects", link: "/projects" },
                    { text: "Education", link: "/education" }
                ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/yourusername" }
        ]
    }
})