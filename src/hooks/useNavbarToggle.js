import { useState } from 'react'

export function useNavbarToggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return { isMenuOpen, handleMenuToggle }
}