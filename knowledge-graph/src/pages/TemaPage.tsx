// src/pages/TemaPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import graphData from "../data/graph.json";

const TemaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Buscar el nodo en el JSON
  const node = graphData.nodes.find((n: any) => n.id === id);

  if (!node) {
    return (
      <div>
        Tema no encontrado. <Link to="/">Volver al grafo</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{node.id}</h1>
      <p>{node.description || "Descripción no disponible."}</p>
      <Link to="/">Volver al grafo</Link>
    </div>
  );
};

export default TemaPage;

