
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "var(--background)",
        color: "var(--text-dark)",
        fontFamily: "var(--font-main)",
        minHeight: "100vh",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={animationVariants}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary)",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Invista com Confiança e Inteligência
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "var(--text-dark)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Descubra seu perfil de investidor e tenha acesso às melhores
              estratégias de investimento personalizadas. Tenha segurança e
              rentabilidade em um só lugar.
            </Typography>
          </Box>
        </motion.div>

        {/* Benefícios do Plano */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          variants={animationVariants}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "var(--color-primary)",
              fontWeight: "bold",
            }}
          >
            Benefícios do Plano Premium
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Carteira Recomendada",
                description:
                  "Receba uma carteira personalizada com as melhores opções de investimento para o seu perfil.",
              },
              {
                title: "Análises Detalhadas",
                description:
                  "Tenha acesso a relatórios completos e análises profundas para tomar decisões estratégicas.",
              },
              {
                title: "Consultoria Especializada",
                description:
                  "Conte com o suporte de especialistas para maximizar seus resultados.",
              },
              {
                title: "Ferramentas Avançadas",
                description:
                  "Utilize planilhas automatizadas e outras ferramentas práticas para gerenciar seus rendimentos.",
              },
            ].map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.2,
                  }}
                  variants={animationVariants}
                >
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "var(--color-secondary)",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--text-dark)" }}>
                      {benefit.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Descubra seu Perfil */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          variants={animationVariants}
        >
          <Box
            sx={{
              mt: 8,
              py: 6,
              px: 4,
              textAlign: "center",
              backgroundColor: "var(--color-primary)",
              color: "var(--text-light)",
              borderRadius: 2,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
              }}
            >
              Descubra seu Perfil de Investidor Gratuitamente
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Saiba qual é o seu perfil de investidor e comece a investir com
              segurança e estratégias personalizadas. É rápido, gratuito e vai
              transformar sua forma de investir.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--color-secondary)",
                color: "var(--text-light)",
                px: 5,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "var(--emphasis)",
                },
              }}
              onClick={() => navigate("/formulario")}
            >
              Descubra Agora
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;
