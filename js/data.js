// Project data. Edit this array to add, remove, or update projects.
//
// id:        stable kebab-case slug — used for routing/image folders. NEVER change
//            this once set, even if you retitle the project later.
// title:     human-readable display name, free to edit anytime.
// category:  single top-level grouping, used for primary sectioning/sorting.
// tags:      short curated list (aim for 2-4) shown as filter pills and on the
//            project card. Keep broad — protocols/tools belong in `skills`, not here.
// skills:    detailed technical list shown on the project detail page under
//            "Skills Needed" (languages, protocols, tools, etc.).
// links:     related URLs. Add more keys (writeup, demo, video, paper) as needed;
//            leave unused ones as null rather than omitting the key.
// date:      "YYYY-MM", zero-padded, for consistent sorting.
// featured:  true pins this project to the top regardless of date.
// thumbnail: path (relative to project root) to the card-view image. Always set
//            this even before gallery images exist, so cards never render empty.
// images:    optional array of { src, caption } shown in a gallery on the project
//            detail page. src is relative to this file's project root, e.g.
//            "images/1u-cubesat-v1/board-stack.jpg". caption explains the image.

const PROJECTS = [
  {
    id: "labview-ground-station-gui",
    title: "LabVIEW Ground Station",
    summary:
      "Ground station GUI for a 1U CubeSat using LabVIEW for 3D attitude visualization, temperature, and comms/packet status, providing a clear real-time view.",
    description:
      "Developed a LabVIEW-based ground station GUI for a 1U CubeSat, enabling real-time monitoring over a serial link. LabVIEW was connected to an Adafruit Feather M0 RFM95 LoRa module to receive data from the CubeSat over the 915 MHz band. The GUI features 3D attitude visualization, temperature monitoring, and communication status indicators. Implemented error handling and data logging to ensure reliable operation during launch. The system was tested to validate performance before deployment.",
    category: "Embedded Systems",
    tags: ["Electrical Engineering", "Embedded Systems"],
    skills: ["LabVIEW", "C Programming", "RF", "LoRa"],
    links: {
      repo: "https://github.com/example/line-following-robot",
      demo: null,
      writeup: null
    },
    date: "2026-05",
    featured: false,
    thumbnail: "images/labview-ground-station-gui/thumb.jpg",
    images: [
      // { src: "images/labview-ground-station-gui/main-panel.jpg", caption: "Main telemetry panel showing live attitude and comms status." }
    ]
  },
  {
    id: "baremetal-stm32-f446re-nucleo-drivers",
    title: "Baremetal STM32 F446RE Nucleo Drivers",
    summary:
      "Developed baremetal drivers for the STM32 F446RE Nucleo board, providing a foundation for embedded system development.",
    description:
      "Developed baremetal drivers for the STM32 F446RE Nucleo board, enabling low-level register manipulation of peripherals such as GPIO, UART, SPI, and I2C. The drivers were designed to be modular and reusable across different projects, providing a foundation for embedded system development. The implementation included custom linker and startup files.",
    category: "Embedded Systems",
    tags: ["Electrical Engineering", "Embedded Systems", "Baremetal Programming"],
    skills: ["C Programming", "MCU Architecture", "Peripheral Interfacing", "SPI", "UART", "I2C"],
    links: {
      repo: "https://github.com/jwerzowa/STM32F446RE_Custom_Drivers",
      demo: null,
      writeup: null
    },
    date: "2025-07",
    featured: false,
    thumbnail: "images/baremetal-stm32-f446re-nucleo-drivers/thumb.jpeg",
    images: [
      // { src: "images/baremetal-stm32-f446re-nucleo-drivers/logic-analyzer.jpg", caption: "Logic analyzer capture of the SPI driver clocking out a register write." }
    ]
  },
  {
    id: "1u-cubesat-v1",
    title: "1U CubeSat V1",
    summary:
      "Integrated breakout boards in two- and three-board stacks for a 1U CubeSat, managing power and data signals. Boards were designed in KiCad and fabricated by JLCPCB.",
    description:
      "Components: Adafruit Feather M0 RFM95, SparkFun ICM-20948 IMU, Raspberry Pi Zero 2W with PiCam, a step-down converter, and a light sensor. The boards were designed in KiCad and fabricated by JLCPCB. The design included power management, signal routing, and integration with the CubeSat's subsystems. The boards were tested for functionality and reliability prior to launch.",
    category: "System Integration",
    tags: ["Electrical Engineering", "PCB Design", "Circuit Design"],
    skills: ["KiCad", "Power Electronics", "C Programming", "I2C"],
    links: {
      repo: "https://github.com/jwerzowa/SSG_LoboSat_3BoardStackup_V1",
      demo: null,
      writeup: null
    },
    date: "2026-06",
    featured: true,
    thumbnail: "images/1u-cubesat-v1/thumb.jpg",
    images: [
      // { src: "images/1u-cubesat-v1/board-stack.jpg", caption: "3-board stack: M0 Feather (top), IMU breakout (middle), Pi Zero 2W (bottom)." }
    ]
  }, 
  {
    id: "healthtunes-website",
    title: "HealthTunes Website",
    summary:
      "Built the marketing website for HealthTunes, a non-profit bringing music-based therapy into clinical care, using Astro and Tailwind CSS.",
    description:
      "Developed the public-facing website for HealthTunes, a non-profit organization partnering with clinical institutions (including UCLA Health, Wellstar, and Chelsea & Westminster NHS) to bring music-based therapy into patient care. Built with Astro and Tailwind CSS, deployed on Hetzner with source hosted on GitLab. Implemented GDPR-compliant cookie consent (CookieYes), dual analytics (Plausible and GA4), Mailchimp email capture, and device-aware call-to-action routing for iOS, Android, and desktop visitors. The site supports German as a required secondary language and follows a custom two-tone brand identity. Authored and structured supporting content including citations, FAQs, condition pages, and partner/artist listings.",
    category: "Web Development",
    tags: ["Web Development", "Front-End"],
    skills: ["Astro", "Tailwind CSS", "JavaScript", "Third Party Integration", "Claude Code"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    },
    date: "2026-07",
    featured: false,
    thumbnail: "images/healthtunes-website/thumb.jpeg",
    images: [
     // { src: "images/healthtunes-website/homepage.jpg", caption: "Homepage hero section with two-tone wordmark and primary CTA." }
    ]
  }
];