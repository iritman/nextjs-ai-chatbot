'use client';

import { Button } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const DarkModeToggle = (
    { theme, toggleTheme }: {
        theme: 'light' | 'dark';
        toggleTheme: () => void
    }) => {
    return (
        <Button onClick={toggleTheme} variant="soft" size="3">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}

export default DarkModeToggle