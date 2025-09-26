import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface FormData {
  nome: string;
  altura: number;
  peso: number;
  objetivo: string;
  contato: string;
}

const PersonalizedPlanForm = () => {
  const [showResult, setShowResult] = useState(false);
  const [imcData, setImcData] = useState({ imc: 0, status: "" });
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Calcular IMC
    const altura = data.altura / 100;
    const imc = +(data.peso / (altura * altura)).toFixed(1);
    
    let status = "";
    if (imc < 18.5) { status = "Abaixo do peso"; }
    else if (imc < 25) { status = "Peso normal"; }
    else if (imc < 30) { status = "Sobrepeso"; }
    else { status = "Obesidade"; }

    setImcData({ imc, status });
    setShowResult(true);
  };

  if (showResult) {
    return (
      <Card className="max-w-2xl mx-auto bg-background shadow-lg">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-green-500 mb-4">✅ Resultado do seu diagnóstico</h3>
          <p className="text-lg text-foreground mb-6">
            📊 Seu IMC é <b>{imcData.imc}</b> → <b>{imcData.status}</b>
          </p>
          
          <div className="text-left space-y-4 mb-6 p-5 bg-muted/30 rounded-lg">
            <p className="text-foreground">
              ✅ <b>Plano exclusivo para você:</b> nosso sistema detectou que com o acompanhamento certo você pode alcançar resultados visíveis em poucas semanas.
            </p>
            <p className="text-foreground">
              ⏳ <b>Atenção:</b> este diagnóstico inicial é gratuito, mas o acesso completo ao <b>App Solução Secreta</b> está disponível por tempo limitado.
            </p>
            <p className="text-foreground">
              🚀 Imagine ter um <b>personal trainer e nutricionista digital</b> no seu bolso, 24h por dia, guiando seus treinos e sua alimentação de forma simples e prática.
            </p>
            <p className="text-foreground">
              🔥 Garante agora o seu plano completo e comece hoje mesmo a transformação que você merece!
            </p>
          </div>
          
          <Button 
            variant="default" 
            className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-3"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            👉 Quero Meu Plano Completo Agora!
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-background shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">🎯 Descubra Seu Plano Personalizado de Emagrecimento</CardTitle>
        <p className="text-muted-foreground">
          Responda algumas perguntas rápidas e receba seu diagnóstico inicial + recomendação de plano.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👤 Seu nome:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="altura"
              rules={{ required: "Campo obrigatório", min: 100, max: 250 }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>📏 Sua altura (cm):</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Ex: 170"
                      min="100" 
                      max="250" 
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="peso"
              rules={{ required: "Campo obrigatório", min: 30, max: 300 }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>⚖️ Seu peso (kg):</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Ex: 70"
                      min="30" 
                      max="300" 
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="objetivo"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>🎯 Seu principal objetivo:</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="perder">Perder peso rápido</SelectItem>
                      <SelectItem value="definir">Definir e tonificar o corpo</SelectItem>
                      <SelectItem value="energia">Ganhar energia e disposição</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contato"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>📩 Seu melhor e-mail ou WhatsApp:</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="exemplo@email.com ou (xx) xxxxx-xxxx"
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3 mt-6">
              Calcular Meu IMC e Ver Meu Plano
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PersonalizedPlanForm;