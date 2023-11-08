import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import MyStatusBar from "./app/components/MyStatusBar";
import ThreadContainer from "./app/pages/Home";
import MyTab from "./Container";

const customColors = {
  primary: {
    // green colors
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  secondary: {
    // red colors
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  light: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

const customTheme = extendTheme({
  colors: customColors,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <MyTab />
    </NativeBaseProvider>
  );
}
