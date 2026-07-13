// Project data. Edit this array to add, remove, or update projects.
// tags: shown as filter pills and on the project card
// skills: shown on the project detail page under "Skills Needed"
const PROJECTS = [
  {
    id: "line-following-robot",
    title: "Autonomous Line-Following Robot",
    summary: "A two-wheeled robot that follows a track using IR sensors and a closed-loop PID controller.",
    description:
      "Built a small autonomous robot capable of following a taped track at variable speeds. " +
      "The chassis carries an array of IR reflectance sensors feeding into an ATmega328P, which runs a " +
      "PID control loop to adjust motor PWM in real time. Designed and etched a custom sensor breakout " +
      "PCB, and wrote the firmware in C. Tuning the PID gains for sharp corners without oscillation was " +
      "the trickiest part of the build.",
    tags: ["Electrical Engineering", "Embedded Systems", "Robotics"],
    skills: ["C", "PCB Design", "PID Control", "Microcontrollers", "Soldering"],
    repo: "https://github.com/example/line-following-robot",
    date: "2025-03"
  },
  {
    id: "power-supply-design",
    title: "Bench Power Supply with Digital Control",
    summary: "A variable linear bench power supply with digital voltage/current readout and soft-start protection.",
    description:
      "Designed a 0-30V, 0-3A linear bench power supply from scratch, including transformer selection, " +
      "regulation stage, and current limiting. Added an STM32-based control board that drives a small " +
      "OLED display for live voltage/current readout and implements soft-start to protect connected loads. " +
      "Full schematic capture and PCB layout was done in KiCad, with the analog front-end validated on a " +
      "breadboard before committing to a board spin.",
    tags: ["Electrical Engineering", "PCB Design", "Circuit Design"],
    skills: ["KiCad", "Analog Design", "STM32", "Power Electronics"],
    repo: "https://github.com/example/bench-power-supply",
    date: "2024-11"
  },
  {
    id: "fpga-dsp",
    title: "FPGA-Based Audio Equalizer",
    summary: "A real-time multi-band audio equalizer implemented on an FPGA using fixed-point DSP.",
    description:
      "Implemented a real-time 5-band graphic equalizer entirely in hardware on a Cyclone IV FPGA. " +
      "Audio is sampled through an I2S codec, processed through a bank of fixed-point IIR filters written " +
      "in Verilog, and streamed back out with under 2ms of latency. Verified filter response against a " +
      "MATLAB reference model before porting the coefficients to fixed-point hardware.",
    tags: ["Electrical Engineering", "FPGA", "DSP"],
    skills: ["Verilog", "Digital Signal Processing", "MATLAB", "I2S/Audio Interfaces"],
    repo: "https://github.com/example/fpga-audio-eq",
    date: "2024-06"
  },
  {
    id: "weather-dashboard",
    title: "Real-Time Weather Dashboard",
    summary: "A web dashboard that aggregates live weather data from multiple APIs into a single view.",
    description:
      "Built a single-page dashboard that pulls current conditions and forecasts from several public " +
      "weather APIs, normalizes the data, and renders it with interactive charts. Includes location search, " +
      "a 7-day forecast view, and severe weather alerts. Focused on keeping the frontend framework-free to " +
      "keep the bundle small and load times fast.",
    tags: ["Software", "Web Development", "APIs", "Data Visualization"],
    skills: ["JavaScript", "REST APIs", "Chart.js", "CSS"],
    repo: "https://github.com/example/weather-dashboard",
    date: "2025-01"
  },
  {
    id: "image-classifier",
    title: "Handwritten Digit Classifier",
    summary: "A convolutional neural network that classifies handwritten digits, trained from scratch on MNIST.",
    description:
      "Trained a small CNN from scratch on the MNIST dataset, reaching 99.1% test accuracy. Covers the " +
      "full pipeline: data augmentation, model architecture experiments, training loop, and a simple " +
      "Flask front-end where users can draw a digit and get a live prediction. Used as a way to get " +
      "hands-on with PyTorch fundamentals before applying them to a larger project.",
    tags: ["Software", "Machine Learning", "Python"],
    skills: ["Python", "PyTorch", "Neural Networks", "Flask"],
    repo: "https://github.com/example/digit-classifier",
    date: "2024-09"
  },
  {
    id: "home-energy-monitor",
    title: "Home Energy Monitor",
    summary: "A non-invasive current-sensing device that tracks whole-home power usage and logs it to a local dashboard.",
    description:
      "Designed a clamp-on current transformer sensing circuit paired with an ESP32 to measure whole-home " +
      "power draw without cutting into any wiring. Data is pushed over Wi-Fi to a local server and " +
      "visualized in a small web dashboard, with historical trends and cost estimates based on utility rates. " +
      "Calibration against a known load was needed to get accurate RMS current readings from the CT clamp.",
    tags: ["Electrical Engineering", "Embedded Systems", "Software", "IoT"],
    skills: ["ESP32", "Analog Sensing", "C++", "Data Logging"],
    repo: "https://github.com/example/home-energy-monitor",
    date: "2025-05"
  }
];
