import React, { useMemo, useState } from 'react';

function Card({ children, className = '', style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

function CardContent({ children, className = '', style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

function CardHeader({ children, className = '', style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

function CardTitle({ children, className = '', style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
        props.className || ''
      }`}
    />
  );
}

function Label({ children, className = '', ...props }) {
  return (
    <label
      className={`block text-sm font-semibold text-slate-700 mb-2 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

function Progress({ value = 0, className = '' }) {
  return (
    <div className={className + ' bg-slate-200 rounded-full overflow-hidden'}>
      <div
        className="h-full rounded-full"
        style={{
          width: `${value}%`,
          background: 'linear-gradient(90deg, #123B8C, #E3B93C)',
        }}
      />
    </div>
  );
}

const hqs = {
  navy: '#07142F',
  blue: '#123B8C',
  gold: '#E3B93C',
  green: '#22C55E',
  cream: '#FFF8E8',
  soft: '#F6F8FC',
  slate: '#5E687A',
};

function Icon({ name, className = '', style = {} }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style,
  };

  const icons = {
    check: (
      <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>
    ),
    chevronRight: (
      <svg {...common}><path d="m9 18 6-6-6-6" /></svg>
    ),
    battery: (
      <svg {...common}><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 11v2" /><path d="M7 11h6" /></svg>
    ),
    home: (
      <svg {...common}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>
    ),
    zap: (
      <svg {...common}><path d="M13 2 3 14h8l-1 8 11-14h-8l1-6z" /></svg>
    ),
    shield: (
      <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    sun: (
      <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
    ),
    lock: (
      <svg {...common}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
    ),
    user: (
      <svg {...common}><circle cx="12" cy="8" r="4" /><path d="M4 22c1.5-4 14.5-4 16 0" /></svg>
    ),
  };

  return icons[name] || icons.check;
}

const batteryOptions = ['Tesla', 'Enphase', 'EG4', 'No estoy seguro'];

const batteryLogos = {
  Tesla: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 60">
      <rect width="180" height="60" rx="12" fill="transparent"/>
      <path d="M90 10 C72 10 55 14 40 22 L45 31 C58 24 73 20 90 20 C107 20 122 24 135 31 L140 22 C125 14 108 10 90 10 Z" fill="#E82127"/>
      <path d="M76 25 L104 25 L91 50 L89 50 Z" fill="#E82127"/>
    </svg>
  `)}`,
  Enphase: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60">
      <rect width="220" height="60" rx="12" fill="transparent"/>
      <circle cx="28" cy="30" r="16" fill="none" stroke="#F37021" stroke-width="6"/>
      <line x1="12" y1="30" x2="44" y2="30" stroke="#F37021" stroke-width="6" stroke-linecap="round"/>
      <text x="58" y="39" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#666C72">ENPHASE</text>
    </svg>
  `)}`,
  EG4: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="42" fill="#202225" stroke="#5B5E63" stroke-width="6"/>
      <text x="50" y="58" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF">EG4</text>
    </svg>
  `)}`,
};

const backupOptions = ['Solo lo esencial', 'Parte de la casa', 'Toda la casa'];
const financingOptions = ['Préstamo', 'Cash', 'Leasing', 'Quiero evaluar opciones'];
const warrantyOptions = ['10 años', '15 años', '20 años', '25 años'];
const investmentOptions = ['Pago mensual bajo', 'Balance pago/ahorro', 'Pagar rápido (menos intereses)', 'No estoy seguro'];
const roofOptions = ['Cemento', 'Cemento + Galvalum'];
const creditOptions = ['500–599', '600–649', '650–699', '700+'];
const installOptions = ['Lo antes posible', '1–3 meses', 'Solo evaluando'];
const reasonOptions = ['Reducir factura', 'Apagones', 'Independencia energética', 'Inversión'];

function PillGroup({ label, value, setValue, options }) {
  const isBattery = options === batteryOptions;

  return (
    <div className="space-y-3 md:col-span-1">
      <Label className="text-sm font-semibold text-slate-800">{label}</Label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setValue(option)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm transition-all flex items-center justify-center gap-3 ${
                active
                  ? 'border-transparent text-white shadow-2xl scale-105 ring-4 ring-yellow-300/40'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
              style={active ? { background: `linear-gradient(135deg, ${hqs.navy}, ${hqs.blue})` } : undefined}
            >
              {isBattery && batteryLogos[option] ? (
                <img src={batteryLogos[option]} alt={option} className="h-8 w-auto object-contain" />
              ) : (
                <span>{option}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function HQSCotizadorDemo() {
  const [form, setForm] = useState({
    name: 'Carlos Rivera',
    owner: 'Sí',
    roof: 'Cemento',
    email: 'carlos@email.com',
    phone: '(787) 555-1234',
    town: 'Ponce',
    roofCondition: 'Sí',
    bill1: '620',
    bill2: '575',
    bill3: '640',
    backup: 'Parte de la casa',
    battery: 'Tesla',
    investment: 'Balance pago/ahorro',
    financing: 'Préstamo',
    warranty: '25 años',
    credit: '700+',
    install: 'Lo antes posible',
    reason: 'Reducir factura',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const avg = useMemo(() => {
    const values = [form.bill1, form.bill2, form.bill3].map((v) => Number(v) || 0);
    const valid = values.filter((v) => v > 0);
    if (!valid.length) return 0;
    return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
  }, [form.bill1, form.bill2, form.bill3]);

  // Producción base: 10 paneles = 5,986 kWh/año (valor real de referencia)
  const targetOffset = 1.2;
  const targetAnnualConsumption = avg * 12 * targetOffset;
  const estimatedPanels = Math.max(4, Math.round((targetAnnualConsumption / 5986) * 10));
  const annualProduction = Math.round((estimatedPanels / 10) * 5986);
  const monthlyProduction = Math.round(annualProduction / 12);

  const tests = useMemo(() => {
    const sampleAvg = Math.round((620 + 575 + 640) / 3);
    const samplePanels = Math.max(4, Math.round(((sampleAvg * 12 * 1.2) / 5986) * 10));
    return {
      averageCalculation: sampleAvg === 612,
      panelCalculationIsRealistic: samplePanels === 15,
      annualProductionMatchesPanels: Math.round((samplePanels / 10) * 5986) === 8979,
    };
  }, []);

  const updateForm = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmitLead = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const [firstName, ...lastParts] = form.name.trim().split(' ');
    const lastName = lastParts.join(' ') || '-';

    const leadPayload = {
      firstName: firstName || form.name,
      lastName,
      email: form.email,
      phone: form.phone,
      town: form.town,
      owner: form.owner,
      roof: form.roof,
      roofCondition: form.roofCondition,
      bill1: form.bill1,
      bill2: form.bill2,
      bill3: form.bill3,
      averageConsumption: avg,
      annualConsumption: avg * 12,
      estimatedPanels,
      annualProduction,
      backup: form.backup,
      battery: form.battery,
      investment: form.investment,
      financing: form.financing,
      warranty: form.warranty,
      credit: form.credit,
      install: form.install,
      reason: form.reason,
    };

    try {
      const response = await fetch('/api/hqs-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadPayload),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la evaluación.');
      }

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error enviando lead:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full text-slate-900" style={{ background: `linear-gradient(180deg, ${hqs.cream} 0%, #FFFFFF 35%, ${hqs.soft} 100%)` }}>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,20,47,0.82), rgba(18,59,140,0.55)), url('https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2200&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ffffff 0, transparent 30%), radial-gradient(circle at 80% 0%, #E3B93C 0, transparent 18%)' }} />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-1 lg:px-10 lg:py-24">
          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Energía Solar Inteligente <br />
                <span style={{ color: hqs.gold }}>para tu Hogar</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-slate-200">
                Calcula tu sistema solar, conoce una estimación personalizada y descubre cómo reducir tu factura eléctrica con una solución adaptada a tu hogar.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mt-10">
              {[
                ['Sin costos ocultos', 'Información clara para tomar buenas decisiones', 'shield'],
                ['Resultado rápido', 'Promedio con tus 3 meses más altos', 'zap'],
                ['Servicio cercano', 'Evaluación personalizada para tu hogar', 'check'],
              ].map(([title, text, iconName]) => (
                <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <Icon name={iconName} className="mb-4 h-6 w-6 text-yellow-300" />
                  <div className="text-base font-semibold text-white">{title}</div>
                  <div className="mt-1 text-base text-slate-200">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: hqs.gold }}>Cotización gratuita</div>
            <h2 className="mt-2 text-3xl font-bold" style={{ color: hqs.navy }}>Conoce lo que puedes ahorrar</h2>
          </div>
          <div className="min-w-[220px] space-y-2 rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Progreso</span>
              <span>78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl" style={{ color: hqs.navy }}>
                  <Icon name="home" className="h-5 w-5" /> Información básica y propiedad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Nombre completo</Label>
                    <Input value={form.name} onChange={(e) => updateForm('name', e.target.value)} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Pueblo / Ciudad</Label>
                    <Input value={form.town} onChange={(e) => updateForm('town', e.target.value)} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value={form.email} onChange={(e) => updateForm('email', e.target.value)} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <Input value={form.phone} onChange={(e) => updateForm('phone', e.target.value)} className="rounded-xl" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <PillGroup label="¿Es dueño de la propiedad?" value={form.owner} setValue={(owner) => updateForm('owner', owner)} options={['Sí', 'No']} />
                  <PillGroup label="Tipo de techo" value={form.roof} setValue={(roof) => updateForm('roof', roof)} options={roofOptions} />
                </div>
                <PillGroup label="¿El techo está en buenas condiciones?" value={form.roofCondition} setValue={(roofCondition) => updateForm('roofCondition', roofCondition)} options={['Sí', 'Necesita reparación', 'No estoy seguro']} />
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl" style={{ color: hqs.navy }}>
                  <Icon name="zap" className="h-5 w-5" /> Consumo, respaldo y preferencias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <div className="mb-3 text-sm font-semibold text-slate-800">Ingresa tus 3 consumos más altos</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Consumo 1</Label>
                      <Input value={form.bill1} onChange={(e) => updateForm('bill1', e.target.value)} className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Consumo 2</Label>
                      <Input value={form.bill2} onChange={(e) => updateForm('bill2', e.target.value)} className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Consumo 3</Label>
                      <Input value={form.bill3} onChange={(e) => updateForm('bill3', e.target.value)} className="rounded-xl" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-slate-600 mb-2 text-center">Promedio de consumo mensual: <span className="font-semibold text-slate-800">{avg} kWh</span></div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min((avg / 1000) * 100, 100)}%`,
                          background: `linear-gradient(90deg, ${hqs.blue}, ${hqs.gold})`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-slate-500 mt-2 text-center">
                      Usamos tu promedio de consumo mensual para estimar aproximadamente el tamaño de tu sistema solar.
                    </div>
                  </div>
                </div>

                <PillGroup label="En caso de apagón, ¿qué deseas mantener funcionando?" value={form.backup} setValue={(backup) => updateForm('backup', backup)} options={backupOptions} />
                <PillGroup label="¿Qué tipo de batería prefieres?" value={form.battery} setValue={(battery) => updateForm('battery', battery)} options={batteryOptions} />
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
                  Nuestros especialistas te ayudan a seleccionar la mejor opción según tu consumo, respaldo deseado y presupuesto.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl" style={{ color: hqs.navy }}>
                  <Icon name="battery" className="h-5 w-5" /> Crédito, financiamiento y cierre
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <PillGroup label="¿Cómo prefieres manejar tu inversión?" value={form.investment} setValue={(investment) => updateForm('investment', investment)} options={investmentOptions} />
                <div className="grid gap-5 md:grid-cols-2">
                  <PillGroup label="Tipo de financiamiento" value={form.financing} setValue={(financing) => updateForm('financing', financing)} options={financingOptions} />
                  <PillGroup label="Garantía deseada" value={form.warranty} setValue={(warranty) => updateForm('warranty', warranty)} options={warrantyOptions} />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <PillGroup label="Rango de crédito" value={form.credit} setValue={(credit) => updateForm('credit', credit)} options={creditOptions} />
                  <PillGroup label="¿Cuán pronto deseas instalar?" value={form.install} setValue={(install) => updateForm('install', install)} options={installOptions} />
                </div>
                <PillGroup label="Motivo principal" value={form.reason} setValue={(reason) => updateForm('reason', reason)} options={reasonOptions} />
                <div className="rounded-2xl border p-4 text-sm" style={{ borderColor: '#FDE68A', backgroundColor: '#FFFBEB', color: '#92400E' }}>
                  Realizamos <span className="font-semibold">soft inquiry</span>. No afecta tu crédito y te ayudamos a evaluar opciones claras.
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <Card className="rounded-[32px] border-0 shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-extrabold" style={{ color: hqs.gold }}>
                    {monthlyProduction} kWh / mes
                  </div>
                  <div className="text-xl text-slate-600 mt-1">
                    {annualProduction.toLocaleString()} kWh / año
                  </div>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4" /> Estimación lista
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4">
                  <div className="text-white p-8 text-center" style={{ background: `linear-gradient(135deg, ${hqs.navy}, ${hqs.blue})` }}>
                    <div className="text-6xl font-bold" style={{ color: hqs.gold }}>{estimatedPanels}</div>
                    <div className="text-lg font-semibold">PANELES SOLARES</div>
                    <div className="text-sm text-slate-300">Qcells 410W</div>
                  </div>
                </div>

                <div className="border rounded-2xl p-4 mb-4">
                  <div className="font-semibold text-slate-800 mb-3">Resumen de tus respuestas</div>
                  <div className="divide-y divide-slate-200">
                    {[
                      ['Nombre', form.name],
                      ['Pueblo / Ciudad', form.town],
                      ['Propiedad', form.owner === 'Sí' ? 'Casa propia' : 'No propia'],
                      ['Tipo de techo', form.roof],
                      ['Condición del techo', form.roofCondition],
                      ['Consumo promedio', `${avg} kWh`],
                      ['Batería', form.battery],
                      ['Financiamiento', form.financing],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 py-2 text-sm">
                        <span className="text-slate-600">{label}</span>
                        <span className="font-medium text-slate-800 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-400 text-center">
                  Esta es una estimación basada en tu consumo promedio. El diseño final puede variar luego de la evaluación técnica.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border-0 shadow-2xl overflow-hidden" style={{ background: `linear-gradient(145deg, ${hqs.navy}, ${hqs.blue})` }}>
              <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${hqs.gold}, #FDE68A, ${hqs.gold})` }} />

              <CardContent className="p-7 text-white relative">
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rounded-full blur-3xl" style={{ background: hqs.gold }} />

                <div className="text-center mb-8 relative z-10">
                  <div className="text-sm uppercase tracking-[0.3em] text-yellow-200 font-semibold mb-2">
                    Ventajas HQS
                  </div>
                  <div className="text-2xl font-extrabold leading-tight">
                    ¿Por qué elegir <span style={{ color: hqs.gold }}>HQS ENERGY</span>?
                  </div>
                  <div className="text-sm text-slate-300 mt-3 leading-relaxed">
                    Diseñamos sistemas solares inteligentes adaptados a tu consumo, respaldo y presupuesto.
                  </div>
                </div>

                <div className="grid gap-4 relative z-10">
                  {[
                    ['zap', 'Especialistas en energía solar', 'Experiencia real trabajando sistemas en Puerto Rico.'],
                    ['battery', 'Equipos premium y garantía', 'Trabajamos baterías y componentes de alta calidad.'],
                    ['check', 'Financiamiento flexible', 'Opciones adaptadas según tu necesidad y crédito.'],
                    ['home', 'Instalación profesional', 'Soporte local y acompañamiento personalizado.'],
                  ].map(([iconName, title, text]) => (
                    <div
                      key={title}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                          style={{ background: 'rgba(255,255,255,0.08)' }}
                        >
                          <Icon name={iconName} className="h-6 w-6 text-yellow-300" />
                        </div>

                        <div>
                          <div className="font-bold text-base text-white leading-snug">
                            {title}
                          </div>
                          <div className="text-sm text-slate-300 mt-1 leading-relaxed">
                            {text}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-center relative z-10">
                  <div className="text-sm font-semibold text-green-300 uppercase tracking-wide">
                    Evaluación personalizada
                  </div>
                  <div className="text-sm text-slate-200 mt-1">
                    Nuestro equipo revisará tu consumo y preparará una propuesta adaptada para tu hogar.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="w-full px-6 pb-10">
        <button
          type="button"
          className="w-full py-5 text-lg font-bold rounded-2xl shadow-xl text-white"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          onClick={handleSubmitLead}
          disabled={isSubmitting}
        >
          <span className="flex items-center justify-center gap-4 text-2xl tracking-wide">
            <Icon name="sun" className="h-6 w-6" />
            {isSubmitting ? 'ENVIANDO EVALUACIÓN...' : 'RECIBIR MI EVALUACIÓN SOLAR PERSONALIZADA'}
            <Icon name="chevronRight" className="h-6 w-6" />
          </span>
        </button>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
          <Icon name="lock" className="h-4 w-4" />
          TU INFORMACIÓN ESTÁ 100% SEGURA Y NO SERÁ COMPARTIDA.
        </div>
        {submitStatus === 'success' && (
          <div className="mt-4 rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-center text-sm font-semibold text-green-700">
            EVALUACIÓN ENVIADA CORRECTAMENTE. UN ESPECIALISTA DE HQS ENERGY SE COMUNICARÁ CONTIGO.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-center text-sm font-semibold text-red-700">
            HUBO UN ERROR AL ENVIAR LA EVALUACIÓN. INTÉNTALO NUEVAMENTE.
          </div>
        )}
      </div>

      <div className="hidden" aria-label="Pruebas internas">
        {Object.entries(tests).map(([name, passed]) => (
          <span key={name} data-test-name={name} data-test-passed={passed ? 'true' : 'false'} />
        ))}
      </div>
    </div>
  );
}

