// Project data. Edit this array to add, remove, or update projects.
// tags: shown as filter pills and on the project card
// skills: shown on the project detail page under "Skills Needed"
// images: optional array of { src, caption } shown in a gallery on the project detail page.
//   src is a path relative to this file's project root, e.g. "images/1u-cubesat-v1/board-stack.jpg".
//   caption is the annotation shown underneath the image explaining what it shows.
const PROJECTS = [
  {
    id: "LabVIEW Ground Station GUI",
    title: "LabVIEW Ground Station",
    summary: "Groundstation GUI for 1U CubeSat using LabVIEW, where the GUI receives telemetry data from the satellite: 3D attitude visualization, temperature, and comms/packet status. System provides a variety of error handling and logging features for use on launch day, providing clear realtime view.",
    description:
      "Developed a LabVIEW-based ground station GUI for a 1U CubeSat, enabling real-time telemetry monitoring and control. The GUI features 3D attitude visualization, temperature monitoring, and communication status indicators. Implemented error handling and data logging to ensure reliable operation during launch. The system was tested to validate performance before deployment.",
    tags: ["Electrical Engineering", "Embedded Systems"],
    skills: ["LabVIEW", "C Programming"],
    repo: "https://github.com/example/line-following-robot",
    date: "2026-05",
    images: [
      // { src: "images/labview-ground-station-gui/main-panel.jpg", caption: "Main telemetry panel showing live attitude and comms status." }
    ]
  },
  {
    id: "Baremetal STM32 F446RE Nucelo Drivers",
    title: "Baremetal STM32 F446RE Nucleo Drivers",
    summary: "Developed baremetal drivers for the STM32 F446RE Nucleo board: providing a foundation for embedded system development.",
    description:
      "Developed baremetal drivers for the STM32 F446RE Nucleo board, enabling low-level register manipulation of peripherals such as GPIO, UART, SPI, and I2C. The drivers were designed to be modular and reusable across different projects, providing a foundation for embedded system development. The implementation included custom linker and startup files.",
    tags: ["Electrical Engineering", "Embedded Systems", "STM32", "Baremetal Programming", "C", "SPI", "UART", "I2C"],
    skills: ["C Programming", "MCU Architecture", "Peripheral Interface"],
    repo: "https://github.com/example/line-following-robot",
    date: "2025-03",
    images: [
      // { src: "images/baremetal-stm32-f446re-nucelo-drivers/logic-analyzer.jpg", caption: "Logic analyzer capture of the SPI driver clocking out a register write." }
    ]
  },
  {
    id: "1U CubeSat V1",
    title: "1U CubeSat V1",
    summary: "Integrate break out boards in two and three board stack for a 1U CubeSat, managing power and datat signals. The boards were designed in KiCad and fabricated by JLCPCB.",
    description:
      "Components: Adafruit Feather M0 RFM95, Sparkfun ICM-20948 IMU, Raspberry Pi Zero 2W with PiCam, step down converter, and lightracker. The boards were designed in KiCad and fabricated by JLCPCB. The design included power management, signal routing, and integration with the CubeSat's subsystems. The boards were tested for functionality and reliability prior to launch.",
    tags: ["Electrical Engineering", "PCB Design", "Circuit Design", "C", "I2C", ],
    skills: ["KiCad", "Power Electronics"],
    repo: "https://github.com/jwerzowa/SSG_LoboSat_3BoardStackup_V1",
    date: "2026-6",
    images: [
      // { src: "images/1u-cubesat-v1/board-stack.jpg", caption: "3-board stack: M0 Feather (top), IMU breakout (middle), Pi Zero 2W (bottom)." }
    ]
  },
];
