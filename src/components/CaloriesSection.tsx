import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const CaloriesSection = () => {
  const data = [
    { time: "09", consumed: 1800, burned: 1600 },
    { time: "10", consumed: 1500, burned: 1700 },
    { time: "11", consumed: 1200, burned: 1800 },
    { time: "12", consumed: 1400, burned: 1500 },
    { time: "13", consumed: 1600, burned: 1300 },
    { time: "14", consumed: 1300, burned: 1000 },
    { time: "15", consumed: 1700, burned: 1600 },
    { time: "16", consumed: 2200, burned: 1800 },
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Chart Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white rounded-3xl shadow-2xl border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Hoje</h3>
                      <p className="text-sm text-gray-600">Consumo Calórico: 705</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600">Calorias consumidas</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Calorias queimadas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis 
                        dataKey="time" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        domain={[0, 2500]}
                        ticks={[0, 500, 1000, 1500, 2000, 2500]}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="consumed" 
                        stroke="#EF4444" 
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: '#EF4444' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="burned" 
                        stroke="#22C55E" 
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: '#22C55E' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Below Chart */}
          <div className="space-y-8">
            <div className="text-6xl">🔥</div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Descubra seu saldo calórico
              </h2>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Com o registro do seu exercício e taxa metabólica basal, você consegue saber diariamente se está gastando mais calorias do que ingerindo
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="default" 
                size="xl" 
                className="font-semibold px-12 py-4 text-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comprar agora →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaloriesSection;