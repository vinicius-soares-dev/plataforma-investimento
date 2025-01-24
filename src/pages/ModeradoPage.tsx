
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ModeradoPage = () => {
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
      <Container maxWidth="md">
        {/* Título */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={animationVariants}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "center",
              mb: 4,
              color: "var(--color-primary)",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Seu Perfil é{" "}
            <span style={{ color: "var(--color-secondary)" }}>Moderado</span>
          </Typography>
        </motion.div>

        {/* Explicação do Perfil */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          variants={animationVariants}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "var(--text-dark)",
            }}
          >
            Você busca um equilíbrio entre segurança e rentabilidade nos seus
            investimentos. Está disposto a correr riscos moderados para
            alcançar retornos melhores no médio e longo prazo.
          </Typography>
        </motion.div>

        {/* Opções de Investimento */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.6 }}
          variants={animationVariants}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "var(--color-primary)",
              textAlign: "center",
            }}
          >
            Opções de Investimento Recomendadas
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Fundos Multimercados",
                description:
                  "Uma opção diversificada com diferentes tipos de ativos, ideal para investidores moderados.",
              },
              {
                title: "Debêntures",
                description:
                  "Títulos de dívida corporativa que oferecem bons retornos com riscos moderados.",
              },
              {
                title: "Fundos Imobiliários (FII)",
                description:
                  "Ótima alternativa para investir no mercado imobiliário com boa liquidez e rentabilidade.",
              },
            ].map((investment, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + index * 0.2,
                  }}
                  variants={animationVariants}
                >
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "var(--color-secondary)",
                          fontWeight: "bold",
                        }}
                      >
                        {investment.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {investment.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Benefícios do Plano */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          variants={animationVariants}
        >
          <Box
            sx={{
              backgroundColor: "var(--text-light)",
              p: 4,
              mt: 6,
              borderRadius: 2,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "var(--color-primary)",
                textAlign: "center",
              }}
            >
              Adquira o Plano Premium e Potencialize Seus Resultados!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
              Com o plano premium, você terá acesso a:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Carteira recomendada personalizada com os melhores
                  investimentos para seu perfil.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Planilhas automatizadas para organizar seus rendimentos.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Análises detalhadas e relatórios para tomar as melhores
                  decisões.
                </Typography>
              </li>
            </ul>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--text-light)",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "var(--emphasis)",
                  },
                }}
              >
                Adquirir Plano Premium
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ModeradoPage;
