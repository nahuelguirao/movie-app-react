import { useNavbarToggle } from '../../hooks/useNavbarToggle'
import { HeaderTitle } from './HeaderTitle'
import { NavbarMobile } from './NavbarMobile'
import { NavbarDesktop } from './NavbarDesktop'
import { motion } from 'framer-motion'
import '../../styles/navbar.css'

export function Header() {
    const { isMenuOpen, handleMenuToggle } = useNavbarToggle()

    return (
        <>
            <motion.header initial={false} animate={{ height: isMenuOpen ? '30vh' : '10vh', y: [-100, 0] }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <HeaderTitle />
                <NavbarMobile isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
                <NavbarDesktop />
            </motion.header>
        </>
    )
}
