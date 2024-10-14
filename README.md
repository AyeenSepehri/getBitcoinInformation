# GetCryptoInformation

A **Next.js** application that allows users to search for cryptocurrency data by name and displays detailed information about the selected coin, or a 404 page if the coin is not found. This project utilizes **server-side rendering (SSR)** to fetch and display data from the [CoinGecko API](https://www.coingecko.com/en/api).

## Features

- **Search Functionality**: Users can enter a cryptocurrency symbol to retrieve details about the coin.
- **Server-Side Rendering (SSR)**: Ensures that data is fetched from the CoinGecko API on the server before rendering the coin details page.
- **Dynamic Routing**: Each search generates a dynamic route (`/coin/[id]`) based on the symbol entered.
- **Error Handling**: If the cryptocurrency is not found in the API, a custom 404 page is displayed.
- **Reusable Components**: Includes reusable `Card`, `CryptoInfoCard`, and `CryptoNotFoundCard` components, built using TypeScript for strong type-checking.

## Technologies Used

- **Next.js (v14)** with **App Router**
- **React** and **TypeScript**
- **Tailwind CSS** for styling
- **Axios** for API calls
- **CoinGecko API** for fetching cryptocurrency data

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AyeenSepehri/getCryptoInformation.git

2. Navigate to the project directory:

    cd getCryptoInformation


3. Install the dependencies:

    npm install

4. Run the development server:

        npm run dev
5. Open http://localhost:3000 to view the application.

## Project Structure
.
├── app
│   ├── coin
│   │   └── [id]
│   └── page.tsx              # Home page with search functionality
├── components
│   ├── Card                  # Reusable Card component
│   ├── CryptoInfoCard         # Displays detailed coin information
│   └── CryptoNotFoundCard     # Displays 404 message if coin is not found
├── next.config.mjs            # Next.js configuration
└── README.md                  # Project documentation

## API Integration
The project fetches cryptocurrency data from the CoinGecko API. The server-side function checks if the entered name exists in the API. If valid, detailed information is rendered. Otherwise, a custom 404 card is shown.


