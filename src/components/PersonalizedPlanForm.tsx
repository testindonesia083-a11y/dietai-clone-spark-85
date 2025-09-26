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
      <Card className="max-w-2xl mx-auto bg-background shadow-lg">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-green-500 mb-4">✅ Resultado do seu diagnóstico</h3>
          <p className="text-lg text-foreground mb-6">
            📊 Olá, <b>{imcData.nome}</b>! Seu IMC é <b>{imcData.imc}</b> → <b>{imcData.status}</b>
          </p>
          
          <div className="text-left space-y-4 mb-6 p-5 bg-muted/30 rounded-lg">
            <p className="text-foreground">
              🚀 Com base nas suas informações, criamos um plano inicial para você.
            </p>
            <p className="text-foreground">
              🤖 Nossa <b>Inteligência Artificial exclusiva</b> ajusta treinos e cardápios em tempo real, mas <u>essa tecnologia está disponível apenas no <b>Plano Premium</b></u> do <b>App Solução Secreta</b>.
            </p>
            <p className="text-foreground">
              🔥 Não perca essa chance: tenha um <b>personal trainer + nutricionista digital</b> no seu bolso 24h por dia.
            </p>
          </div>
          
          <Button 
            variant="default" 
            className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-3"
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
    <Card className="max-w-2xl mx-auto bg-background shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">🎯 Monte Seu Plano de Emagrecimento</CardTitle>
        <p className="text-muted-foreground">
          Responda este quiz rápido e veja seu diagnóstico inicial.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-xl text-primary font-semibold">{currentStepData.question}</h3>
          
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
            className="w-full bg-primary hover:bg-primary/90 text-lg py-3 mt-6"
          >
            Próximo →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedPlanForm;