import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface FormData {
  objetivo: string;
  idade: number;
  nivel: string;
  dias: string;
  desafio: string;
}

const PersonalizedPlanForm = () => {
  const [showResult, setShowResult] = useState(false);
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowResult(true);
  };

  if (showResult) {
    return (
      <Card className="max-w-lg mx-auto bg-background shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-green-500 mb-4">✨ Seu plano está quase pronto!</h3>
          <p className="text-foreground mb-6">
            Baseado nas suas respostas, já sabemos como acelerar seus resultados.
            <br />
            👉 Para liberar seu plano completo e ter acesso ao <b>App Solução Secreta</b>, clique abaixo e comece agora!
          </p>
          <Button 
            variant="default" 
            className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Meu Plano Completo!
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto bg-background shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-primary">🎯 Monte seu Plano Personalizado</CardTitle>
        <p className="text-muted-foreground">
          Responda abaixo e descubra o primeiro passo do seu plano exclusivo de emagrecimento em casa:
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="objetivo"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👉 Qual seu principal objetivo?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="perder">Perder peso rápido</SelectItem>
                      <SelectItem value="definir">Definir o corpo</SelectItem>
                      <SelectItem value="energia">Ganhar energia</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idade"
              rules={{ required: "Campo obrigatório", min: 15, max: 90 }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👉 Qual sua idade?</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="15" 
                      max="90" 
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nivel"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👉 Qual seu nível atual?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="iniciante">Iniciante</SelectItem>
                      <SelectItem value="intermediario">Intermediário</SelectItem>
                      <SelectItem value="avancado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dias"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👉 Quantos dias por semana você pode treinar?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2">2 dias</SelectItem>
                      <SelectItem value="3">3 dias</SelectItem>
                      <SelectItem value="5">5+ dias</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desafio"
              rules={{ required: "Campo obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👉 Qual seu maior desafio hoje?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tempo">Falta de tempo</SelectItem>
                      <SelectItem value="motivacao">Falta de motivação</SelectItem>
                      <SelectItem value="comeco">Não saber por onde começar</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Ver Meu Plano Agora
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PersonalizedPlanForm;