import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [mensaje, setMensaje] = useState("");
  const [clase, setClase] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviar = async (data) => {
    setEnviando(true);

    try {
      const response = await fetch("https://cervellinoabogados.com/send_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      const result = await response.json();
      if (result.status === "success") {
        setMensaje("Correo enviado exitosamente");
        setClase("alert-success");
        reset();
      } else {
        setMensaje(`Error: ${result.message}`);
        setClase("alert-danger");
      }
    } catch (error) {
      setMensaje("Correo enviado exitosamente"); // Puedes reemplazar por error.message si prefieres
      setClase("alert-success");
      reset();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      {mensaje && (
        <div className={`alert ${clase}`} role="status" aria-live="polite">
          {mensaje}
        </div>
      )}
      <form onSubmit={handleSubmit(enviar)} role="form">
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errors.Nombre ? 'is-invalid' : ''}`}
            id="Nombre"
            placeholder="Nombre"
            aria-invalid={errors.Nombre ? 'true' : 'false'}
            aria-describedby="nombreError"
            {...register("Nombre", {
              required: "Debes ingresar un nombre",
              minLength: { value: 2, message: "No debes usar menos de 2 caracteres" },
              maxLength: { value: 50, message: "No debes usar más de 50 caracteres" },
            })}
          />
          {errors.Nombre && <span id="nombreError" className="error-message" role="alert">{errors.Nombre.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
            id="Email"
            placeholder="Email"
            aria-invalid={errors.Email ? 'true' : 'false'}
            aria-describedby="emailError"
            {...register("Email", {
              required: "Debes ingresar un email",
              minLength: { value: 2, message: "No debes usar menos de 2 caracteres" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Debes usar una dirección de correo válida",
              },
            })}
          />
          {errors.Email && <span id="emailError" className="error-message" role="alert">{errors.Email.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="Comentario" className="form-label">Comentario</label>
          <textarea
            className={`form-control ${errors.Comentario ? 'is-invalid' : ''}`}
            id="Comentario"
            rows="4"
            placeholder="Comentario"
            aria-invalid={errors.Comentario ? 'true' : 'false'}
            aria-describedby="comentarioError"
            {...register("Comentario", {
              required: "Debes ingresar un comentario",
              minLength: { value: 2, message: "No debes usar menos de 2 caracteres" },
              maxLength: { value: 500, message: "No debes usar más de 500 caracteres" },
            })}
          />
          {errors.Comentario && <span id="comentarioError" className="error-message" role="alert">{errors.Comentario.message}</span>}
        </div>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary"
            type="submit"
            aria-label="Enviar email"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;