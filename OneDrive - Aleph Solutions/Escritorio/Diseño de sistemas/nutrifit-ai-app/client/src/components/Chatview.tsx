import React, { useState } from "react";
import axios from "axios";

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async (prompt: string) => {
    // Añadir el mensaje del usuario al estado
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setIsLoading(true);

    try {
      // Llamada al backend
      const response = await axios.post("http://localhost:5000/api/chat", { prompt }); // Cambia la ruta a tu endpoint del backend
      const assistantResponse = response.data.response; // Asegúrate de que tu backend devuelva el mensaje de GPT bajo esta clave

      // Añadir la respuesta del asistente al estado
      setMessages((prev) => [...prev, { role: "assistant", content: assistantResponse }]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hubo un error al procesar tu solicitud. Intenta nuevamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    sendMessage(userInput);
    setUserInput(""); // Limpiar el campo de entrada
  };

  return (
    <div style={{ width: "600px", margin: "80px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }} className=" text-[#ee4c59]">Chat con Nutricionista</h1>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          height: "400px",
          overflowY: "auto",
          marginBottom: "15px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>Empieza la conversación...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                textAlign: msg.role === "user" ? "right" : "left",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  maxWidth: "80%",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: msg.role === "user" ? "#c4deb4" : "#0dff4d",
                  color: msg.role === "user" ? "#cc0707" : "#cc0707",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div
            style={{
              textAlign: "left",
              marginBottom: "10px",
              fontStyle: "italic",
              color: "#888",
            }}
          >
            Escribiendo...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#84bc65",
            color: "#cc0707",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={isLoading} // Deshabilitar el botón mientras se espera la respuesta
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ChatView;
