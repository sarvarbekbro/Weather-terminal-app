# Weather CLI App 🌦️

A command-line weather application built with **Node.js** that allows users to get real-time weather information directly from the terminal.

## Features

* 🌍 Get weather for any city
* 🔐 Save API token
* 🏙 Save default city
* 📊 Display temperature, humidity, and weather conditions
* 🖥 Simple and fast CLI interface

## Technologies Used

* Node.js
* JavaScript
* CLI arguments
* File system storage

## Installation

Clone the repository:

```bash
git clone https://github.com/sarvarbekbro/Weather-terminal-app.git
cd Weather-terminal-app
```

Install dependencies:

```bash
npm install
```

## Usage

### Show weather

```bash
node weather
```

### Set city

```bash
node weather -s London
```

### Save API token

```bash
node weather -t YOUR_API_TOKEN
```

### Help

```bash
node weather -h
```

## Project Structure

```
weather-cli-app
│
├── helpers
│   └── args.js
│
├── services
│   ├── api.service.js
│   ├── storage.service.js
│   └── log.service.js
│
└── index.js
```

## Author

Created as a Node.js CLI practice project to work with APIs, file system storage, and command-line arguments.

