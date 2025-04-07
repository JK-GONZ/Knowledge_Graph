// src/pages/Home.tsx
import React from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useNavigate } from "react-router-dom";
import graphData from "../data/graph.json";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Grafo de Conocimiento</h1>
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="id"
        onNodeClick={(node: any) => {
          // Se asume que node.id es el identificador único
          navigate(`/tema/${node.id}`);
        }}
      />
    </div>
  );
};

export default Home;

