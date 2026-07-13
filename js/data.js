// Project data. Edit this array to add, remove, or update projects.
// tags: shown as filter pills and on the project card
// skills: shown on the project detail page under "Skills Needed"
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
    date: "2025-03"
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
    date: "2026-6"
  },
];
