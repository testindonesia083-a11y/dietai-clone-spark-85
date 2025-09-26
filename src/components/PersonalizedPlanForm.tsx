import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuizStep {
  question: string;
  type: "text" | "number" | "select";
  id: string;
  options?: string[];
}

interface Answers {
  nome: string;
  altura: number;
  peso: number;
  idade: number;
  sexo: string;
  objetivo: string;
}

const PersonalizedPlanForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [showResult, setShowResult] = useState(false);
  const [imcData, setImcData] = useState({ imc: 0, status: "", nome: "" });

  const quizSteps: QuizStep[] = [
    { question: "👤 Qual é o seu nome?", type: "text", id: "nome" },
    { question: "📏 Qual é a sua altura? (cm)", type: "number", id: "altura" },
    { question: "⚖️ Qual é o seu peso? (kg)", type: "number", id: "peso" },
    { question: "🎂 Qual é a sua idade?", type: "number", id: "idade" },
    { question: "⚧️ Qual é o seu sexo?", type: "select", id: "sexo", options: ["Masculino", "Feminino", "Prefiro não informar"] },
    { question: "🎯 Qual é o seu principal objetivo?", type: "select", id: "objetivo", options: ["Perder peso rápido", "Definir e tonificar", "Ganhar energia e disposição"] }
  ];

  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleNextStep = () => {
    if (!currentAnswer) {
      alert("Por favor, preencha antes de continuar.");
      return;
    }

    const step = quizSteps[currentStep];
    const newAnswers = { ...answers, [step.id]: step.type === "number" ? Number(currentAnswer) : currentAnswer };
    setAnswers(newAnswers);
    setCurrentAnswer("");

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate IMC and show result
      const altura = (newAnswers.altura as number) / 100;
      const peso = newAnswers.peso as number;
      const imc = +(peso / (altura * altura)).toFixed(1);
      
      let status = "";
      if (imc < 18.5) { status = "Abaixo do peso"; }
      else if (imc < 25) { status = "Peso normal"; }
      else if (imc < 30) { status = "Sobrepeso"; }
      else { status = "Obesidade"; }

      setImcData({ imc, status, nome: newAnswers.nome as string });
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-lg mx-auto bg-background shadow-lg">
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-bold text-green-500 mb-3">✅ Resultado do seu diagnóstico</h3>
          <p className="text-sm text-foreground mb-4">
            📊 Olá, <b>{imcData.nome}</b>! Seu IMC é <b>{imcData.imc}</b> → <b>{imcData.status}</b>
          </p>
          
          <div className="text-left space-y-2 mb-4 p-3 bg-muted/30 rounded-lg text-sm">
            <p className="text-foreground">
              🚀 Com base nas suas informações, criamos um plano inicial para você.
            </p>
            <p className="text-foreground">
              🤖 Nossa <b>Inteligência Artificial exclusiva</b> ajusta treinos e cardápios em tempo real, mas <u>essa tecnologia está disponível apenas no <b>Plano Premium</b></u> do <b>LifeApp Solução Secreta</b>.
            </p>
            <p className="text-foreground">
              🔥 Não perca essa chance: tenha um <b>personal trainer + nutricionista digital</b> no seu bolso 24h por dia.
            </p>
          </div>
          
          <Button 
            variant="default" 
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-4 py-2"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            👉 Quero Meu Plano Premium Agora!
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentStepData = quizSteps[currentStep];

  return (
    <Card className="w-full max-w-lg mx-auto bg-background shadow-lg">
      <CardHeader className="text-center pb-3">
        <CardTitle className="text-lg text-primary">🎯 Monte Seu Plano de Emagrecimento</CardTitle>
        <p className="text-sm text-muted-foreground">
          Responda este quiz rápido e veja seu diagnóstico inicial.
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <h3 className="text-base text-primary font-semibold">{currentStepData.question}</h3>
          
          {currentStepData.type === "text" && (
            <Input 
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              className="w-full"
            />
          )}
          
          {currentStepData.type === "number" && (
            <Input 
              type="number"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              className="w-full"
            />
          )}
          
          {currentStepData.type === "select" && (
            <Select value={currentAnswer} onValueChange={setCurrentAnswer}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                {currentStepData.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          
          <Button 
            onClick={handleNextStep}
            className="w-full bg-primary hover:bg-primary/90 text-sm py-2 mt-4"
          >
            Próximo →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedPlanForm;