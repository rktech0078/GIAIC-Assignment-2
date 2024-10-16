import css from "./footer.module.css"
export default function Footer() {
    return (
        <div>
            <div className={css.div}>
                <h1>This is a Section</h1>
            </div>

            <footer className={css.footer}>
                <h1>Contact us</h1>
                <p>Phone: 1234567890</p>
                <p>Email: info@example.com</p>
                <p>Address: 123 Main Street, Anytown, CA 12345</p>
                <p>&copy; All right reserved (2024)</p>
            </footer>
        </div>
    )
}