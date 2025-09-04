import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const captha = "6LeHbb4rAAAAAC6NtCVXU73NED2A21YeXIQEec9V";
    const [captchaValue, setCaptchaValue] = useState(null);

    const {t} = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.target;
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        // 🔹 Validación simple
        if (!nombre || !email || !mensaje) {
            setStatus("❌ Todos los campos son obligatorios");
            return;
        }
        if (!captchaValue) {
            setStatus("❌ Por favor verifica el captcha");
            return;
        }

        // Validar email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("❌ Ingresa un correo válido");
            return;
        }

        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_xdmdj3g",   // 🔹 reemplaza con tu service id
                "template_kiydfoo",  // 🔹 reemplaza con tu template id
                form,
                "fB6eBZ1RQb8jqjzwY"    // 🔹 reemplaza con tu public key
            )
            .then(() => {
                setStatus("✅ ¡Mensaje enviado con éxito!");
                form.reset();
                window.grecaptcha.reset(); // Resetear el captcha
            })
            .catch((err) => {
                setStatus("❌ Error al enviar: " + err.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form  onSubmit={sendEmail} className="flex flex-col gap-3 w-96 p-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-700 text-center">{t("contact")}</h2>

            <input
                type="text"
                name="nombre"
                placeholder={t("name_placeholder")}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder={t("email_placeholder")}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                name="mensaje"
                placeholder={t("message_placeholder")}
                rows="4"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ReCAPTCHA
                sitekey={captha}   // cambia por tu clave pública
                onChange={setCaptchaValue}
            />

            <button
                type="submit"
                disabled={loading}
                className={`p-2 rounded text-white transition ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {loading ? "Enviando..." : "Enviar"}
            </button>

            {status && (
                <p
                    className={`text-sm text-center mt-2 ${status.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                >
                    {status}
                </p>
            )}
        </form>
    );
}

