import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const InvestorProfileForm = () => {
  const questions = [
    {
      id: 1,
      question: "Por quanto tempo você pretende deixar seu dinheiro investido?",
      options: [
        { value: "a", label: "Menos de 6 meses", points: 1 },
        { value: "b", label: "Entre 6 meses e 1 ano", points: 2 },
        { value: "c", label: "Entre 1 ano e 3 anos", points: 3 },
        { value: "d", label: "Acima de 3 anos", points: 4 },
      ],
    },
    {
      id: 2,
      question: "Qual o objetivo desse investimento?",
      options: [
        { value: "a", label: "Preservação do capital, assumindo baixos riscos", points: 1 },
        { value: "b", label: "Aumento gradual do capital, assumindo riscos moderados", points: 2 },
        { value: "c", label: "Aumento acima da média, com riscos elevados", points: 3 },
        { value: "d", label: "Retornos elevados em curto prazo, com riscos muito altos", points: 4 },
      ],
    },
    {
      id: 3,
      question: "Qual é sua experiência com investimentos financeiros?",
      options: [
        { value: "a", label: "Nenhuma experiência ou conhecimento sobre mercado financeiro", points: 1 },
        { value: "b", label: "Conhecimento básico, mas sem experiência prática", points: 2 },
        { value: "c", label: "Alguma experiência prática com mercado financeiro", points: 3 },
        { value: "d", label: "Experiência ampla e formação na área financeira", points: 4 },
      ],
    },
    {
      id: 4,
      question: "Qual a porcentagem dos seus rendimentos você pretende destinar para investimentos?",
      options: [
        { value: "a", label: "Até 25%", points: 1 },
        { value: "b", label: "Entre 25% e 50%", points: 2 },
        { value: "c", label: "Mais de 50%", points: 3 },
      ],
    },
    {
      id: 5,
      question: "Se os investimentos caíssem mais de 30%, o que você faria?",
      options: [
        { value: "a", label: "Resgataria o investimento para evitar mais perdas", points: 1 },
        { value: "b", label: "Manteria o investimento aguardando melhora no mercado", points: 2 },
        { value: "c", label: "Investiria mais para aproveitar as oportunidades", points: 3 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0); // Pontuação total
  const navigate = useNavigate();

  const handleAnswer = (points: number) => {
    setScore((prev) => prev + points); // Soma os pontos da resposta atual

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Define o perfil e redireciona
      if (score + points <= 14) {
        navigate("/perfil-conservador");
      } else if (score + points <= 35) {
        navigate("/perfil-moderado");
      } else {
        navigate("/perfil-arrojado");
      }
    }
  };

  const animationVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--background)",
        color: "var(--text-dark)",
        fontFamily: "var(--font-main)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            textAlign: "center",
            color: "var(--color-primary)",
            fontFamily: "var(--font-secondary)",
          }}
        >
          Descubra seu Perfil de Investidor
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: "200px",
          }}
        >
          <motion.div
            key={currentQuestion}
            variants={animationVariants}
            custom={1}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "var(--text-light)",
                p: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  fontFamily: "var(--font-secondary)",
                  color: "var(--color-primary)",
                }}
              >
                {questions[currentQuestion].question}
              </Typography>

              <RadioGroup
                onChange={(e) => {
                  const selectedOption = questions[currentQuestion].options.find(
                    (option) => option.value === e.target.value
                  );
                  handleAnswer(selectedOption?.points || 0);
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {questions[currentQuestion].options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio color="primary" />}
                    label={option.label}
                    sx={{ mb: 2 }}
                  />
                ))}
              </RadioGroup>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default InvestorProfileForm;
