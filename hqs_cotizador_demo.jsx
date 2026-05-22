import React, { useMemo, useState } from 'react';

const hqs = {
  navy: '#07142F',
  blue: '#123B8C',
  gold: '#E3B93C',
  green: '#22C55E',
  cream: '#FFF8E8',
  soft: '#F6F8FC',
  slate: '#5E687A',
};

const WATTS_PER_PANEL = 410;
const SUN_HOURS_ANNUAL = 1440;
const PRODUCTION_PER_PANEL_ANNUAL = (WATTS_PER_PANEL * SUN_HOURS_ANNUAL) / 1000;

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
      style={{
        width: '100%',
        height: '54px',
        borderRadius: '10px',
        border: '1px solid transparent',
        background: '#F4F4F4',
        padding: '0 18px',
        fontSize: '15px',
        fontWeight: '500',
        color: '#111827',
        outline: 'none',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
      }}
      onFocus={(e) => {
        e.target.style.background = '#FFFFFF';
        e.target.style.border = `1px solid ${hqs.blue}`;
        e.target.style.boxShadow = `0 0 0 3px rgba(18, 59, 140, 0.15)`;
      }}
      onBlur={(e) => {
        e.target.style.background = '#F4F4F4';
        e.target.style.border = '1px solid transparent';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}

function Label({ children, className = '', ...props }) {
  return (
    <label
      className={`block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1 ${className}`}
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
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${value}%`,
          background: `linear-gradient(90deg, ${hqs.blue}, ${hqs.gold})`,
        }}
      />
    </div>
  );
}

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
    check: <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>,
    chevronRight: <svg {...common}><path d="m9 18 6-6-6-6" /></svg>,
    battery: <svg {...common}><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 11v2" /><path d="M7 11h6" /></svg>,
    home: <svg {...common}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>,
    zap: <svg {...common}><path d="M13 2 3 14h8l-1 8 11-14h-8l1-6z" /></svg>,
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    sun: <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>,
    lock: <svg {...common}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
    phone: <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" /></svg>,
  };

  return icons[name] || icons.check;
}

const batteryOptions = ['Tesla', 'Enphase', 'EG4', 'No estoy seguro'];
const backupOptions = ['Solo lo esencial', 'Parte de la casa', 'Toda la casa'];
const financingOptions = ['Préstamo', 'Cash', 'Leasing', 'Quiero evaluar opciones'];
const warrantyOptions = ['10 años', '15 años', '20 años', '25 años'];
const investmentOptions = ['Pago mensual bajo', 'Balance pago/ahorro', 'Pagar rápido (menos intereses)', 'No estoy seguro'];
const roofOptions = ['Cemento', 'Cemento + Galvalum'];
const creditOptions = ['500–599', '600–649', '650–699', '700+'];
const installOptions = ['Lo antes posible', '1–3 meses', 'Solo evaluando'];
const reasonOptions = ['Reducir factura', 'Apagones', 'Independencia energética', 'Inversión'];

function PillGroup({ label, value, setValue, options }) {
  return (
    <div className="space-y-3 md:col-span-1">
      <Label className="text-sm font-semibold text-slate-800">{label}</Label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setValue(option)}
              className={`rounded-2xl border px-5 py-4 text-left text-sm transition-all flex items-center justify-center gap-3 ${
                active
                  ? 'border-transparent text-white shadow-xl scale-[1.02] ring-4 ring-yellow-300/30'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
              }`}
              style={active ? { background: `linear-gradient(135deg, ${hqs.navy}, ${hqs.blue})` } : undefined}
            >
              <span>{option}</span>
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
    consultant: '',
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

  const progress = useMemo(() => {
    const fields = [
      form.name,
      form.consultant,
      form.town,
      form.email,
      form.phone,
      form.owner,
      form.roof,
      form.roofCondition,
      form.bill1,
      form.bill2,
      form.bill3,
      form.backup,
      form.battery,
      form.investment,
      form.financing,
      form.warranty,
      form.credit,
      form.install,
      form.reason,
    ];
    const completed = fields.filter((value) => String(value || '').trim() !== '').length;
    return Math.round((completed / fields.length) * 100);
  }, [form]);

  const avg = useMemo(() => {
    const values = [form.bill1, form.bill2, form.bill3].map((v) => Number(v) || 0);
    const valid = values.filter((v) => v > 0);
    if (!valid.length) return 0;
    return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
  }, [form.bill1, form.bill2, form.bill3]);

  const annualConsumption = avg * 12;
  const estimatedPanels = Math.max(4, Math.ceil(annualConsumption / PRODUCTION_PER_PANEL_ANNUAL));
  const systemKw = (estimatedPanels * WATTS_PER_PANEL) / 1000;
  const annualProduction = Math.round(estimatedPanels * PRODUCTION_PER_PANEL_ANNUAL);
  const monthlyProduction = Math.round(annualProduction / 12);
  const coveragePercent = annualConsumption > 0 ? Math.round((annualProduction / annualConsumption) * 100) : 0;
  const targetPanels120 = annualConsumption > 0 ? Math.max(4, Math.ceil((annualConsumption * 1.2) / PRODUCTION_PER_PANEL_ANNUAL)) : 4;
  const extraPanelsFor120 = Math.max(targetPanels120 - estimatedPanels, 0);

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
      consultant: form.consultant,
      owner: form.owner,
      roof: form.roof,
      roofCondition: form.roofCondition,
      bill1: form.bill1,
      bill2: form.bill2,
      bill3: form.bill3,
      averageConsumption: avg,
      annualConsumption,
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      if (!response.ok) throw new Error('No se pudo enviar la evaluación.');
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
          backgroundImage: `linear-gradient(90deg, rgba(7,20,47,0.88), rgba(18,59,140,0.58)), url('https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2200&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ffffff 0, transparent 30%), radial-gradient(circle at 80% 0%, #E3B93C 0, transparent 18%)' }} />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24 relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur">
              <Icon name="sun" className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-bold tracking-wide">HQS ENERGY • PUERTO RICO</span>
            </div>
          </div>

          <div className="space-y-5 max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
              Evaluación solar inteligente para hogares en Puerto Rico
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Descubre el sistema solar <br />
              <span style={{ color: hqs.gold }}>ideal para tu hogar</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-200 leading-relaxed">
              Calcula tu sistema solar recomendado, conoce tu producción estimada y recibe una evaluación personalizada diseñada para tu hogar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mt-10 max-w-5xl">
            {[
              ['Resultado rápido', 'Estimación con tus 3 consumos más altos.', 'zap'],
              ['Protección energética', 'Opciones con batería para apagones.', 'shield'],
              ['Evaluación local', 'Equipo en Puerto Rico acompañándote.', 'home'],
            ].map(([title, text, iconName]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <Icon name={iconName} className="mb-4 h-6 w-6 text-yellow-300" />
                <div className="text-base font-semibold text-white">{title}</div>
                <div className="mt-1 text-base text-slate-200">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: hqs.gold }}>Cotización gratuita</div>
            <h2 className="mt-2 text-3xl font-bold" style={{ color: hqs.navy }}>Conoce tu sistema recomendado</h2>
          </div>
          <div className="min-w-[220px] space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl p-6 pb-0" style={{ color: hqs.navy }}>
                  <Icon name="home" className="h-5 w-5" /> Información básica y propiedad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2"><Label>Nombre completo</Label><Input value={form.name} onChange={(e) => updateForm('name', e.target.value)} /></div>
                  <div className="space-y-2"><Label>Pueblo / Ciudad</Label><Input value={form.town} onChange={(e) => updateForm('town', e.target.value)} /></div>
                  <div className="space-y-2"><Label>Email</Label><Input value={form.email} onChange={(e) => updateForm('email', e.target.value)} /></div>
                  <div className="space-y-2"><Label>Teléfono</Label><Input value={form.phone} onChange={(e) => updateForm('phone', e.target.value)} /></div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <PillGroup label="¿Es dueño de la propiedad?" value={form.owner} setValue={(owner) => updateForm('owner', owner)} options={['Sí', 'No']} />
                  <PillGroup label="Tipo de techo" value={form.roof} setValue={(roof) => updateForm('roof', roof)} options={roofOptions} />
                </div>
                <PillGroup label="¿El techo está en buenas condiciones?" value={form.roofCondition} setValue={(roofCondition) => updateForm('roofCondition', roofCondition)} options={['Sí', 'Necesita reparación', 'No estoy seguro']} />
                <div className="space-y-2">
                  <Label>Nombre del consultor o persona que te refirió</Label>
                  <Input value={form.consultant} onChange={(e) => updateForm('consultant', e.target.value)} placeholder="Ej: Juan Pérez" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl p-6 pb-0" style={{ color: hqs.navy }}>
                  <Icon name="zap" className="h-5 w-5" /> Consumo, respaldo y preferencias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div>
                  <div className="mb-3 text-sm font-semibold text-slate-800">Ingresa tus 3 consumos más altos</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2"><Label>Consumo 1</Label><Input value={form.bill1} onChange={(e) => updateForm('bill1', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Consumo 2</Label><Input value={form.bill2} onChange={(e) => updateForm('bill2', e.target.value)} /></div>
                    <div className="space-y-2"><Label>Consumo 3</Label><Input value={form.bill3} onChange={(e) => updateForm('bill3', e.target.value)} /></div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="text-sm text-slate-600 mb-2 text-center">Promedio de consumo mensual: <span className="font-semibold text-slate-900">{avg} kWh</span></div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min((avg / 1000) * 100, 100)}%`, background: `linear-gradient(90deg, ${hqs.blue}, ${hqs.gold})` }} />
                    </div>
                    <div className="text-xs text-slate-500 mt-2 text-center">Usamos tu promedio mensual para estimar aproximadamente el tamaño de tu sistema solar.</div>
                  </div>
                </div>
                <PillGroup label="En caso de apagón, ¿qué deseas mantener funcionando?" value={form.backup} setValue={(backup) => updateForm('backup', backup)} options={backupOptions} />
                <PillGroup label="¿Qué tipo de batería prefieres?" value={form.battery} setValue={(battery) => updateForm('battery', battery)} options={batteryOptions} />
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-0 shadow-xl bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl p-6 pb-0" style={{ color: hqs.navy }}>
                  <Icon name="battery" className="h-5 w-5" /> Crédito, financiamiento y cierre
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
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
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5" style={{ background: '#FEF3C7', color: '#92400E', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Estimación preliminar HQS
                  </div>
                  <div className="text-4xl font-extrabold" style={{ color: hqs.gold }}>{monthlyProduction} kWh / mes</div>
                  <div className="text-xl text-slate-600 mt-1">{annualProduction.toLocaleString()} kWh / año</div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4">
                  <div className="text-white p-8 text-center" style={{ background: `linear-gradient(135deg, ${hqs.navy}, ${hqs.blue})` }}>
                    <div className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">Sistema HQS recomendado</div>
                    <div className="mt-3 text-[92px] font-black leading-none tracking-tight" style={{ color: hqs.gold }}>{estimatedPanels}</div>
                    <div className="text-sm font-extrabold tracking-[0.25em] uppercase text-white">Paneles Qcells 410W</div>
                    <div className="mt-2 text-sm text-slate-300">Sistema estimado: {systemKw.toFixed(2)} kW</div>
                    <div className="mt-1 text-sm text-slate-300">+ batería {form.battery}</div>
                  </div>
                </div>

                <div className="rounded-2xl p-5 mb-5" style={{ background: 'linear-gradient(135deg, #EFF6FF, #FFFFFF)', border: '1px solid #DBEAFE' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-blue-700">Offset estimado</div>
                      <div className="text-3xl font-extrabold text-slate-900">{coveragePercent}%</div>
                    </div>
                    <div className="rounded-2xl px-4 py-3 text-right" style={{ background: '#FFFFFF', border: '1px solid #DBEAFE' }}>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Consumo anual estimado</div>
                      <div className="text-lg font-bold text-slate-900">{annualConsumption.toLocaleString()} kWh</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {extraPanelsFor120 > 0
                      ? `Para acercarte a un 120% de offset, recomendamos añadir ${extraPanelsFor120} paneles más.`
                      : 'Este sistema ya está cerca o por encima del 120% de offset recomendado.'}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 mb-4 bg-slate-50">
                  <div className="font-semibold text-slate-800 mb-3">Resumen de tus respuestas</div>
                  <div className="divide-y divide-slate-200">
                    {[
                      ['Nombre', form.name],
                      ['Pueblo / Ciudad', form.town],
                      ['Consultor / Referido', form.consultant || 'No indicado'],
                      ['Propiedad', form.owner === 'Sí' ? 'Casa propia' : 'No propia'],
                      ['Tipo de techo', form.roof],
                      ['Consumo promedio', `${avg} kWh`],
                      ['Sistema estimado', `${systemKw.toFixed(2)} kW`],
                      ['Offset estimado', `${coveragePercent}%`],
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
                  Producción y cobertura son estimadas preliminares. El diseño final puede variar luego de la evaluación técnica del hogar.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border-0 shadow-2xl overflow-hidden" style={{ background: `linear-gradient(145deg, ${hqs.navy}, ${hqs.blue})` }}>
              <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${hqs.gold}, #FDE68A, ${hqs.gold})` }} />
              <CardContent className="p-7 text-white relative">
                <div className="text-center mb-8 relative z-10">
                  <div className="text-sm uppercase tracking-[0.3em] text-yellow-200 font-semibold mb-2">Ventajas HQS</div>
                  <div className="text-2xl font-extrabold leading-tight">¿Por qué elegir <span style={{ color: hqs.gold }}>HQS ENERGY</span>?</div>
                  <div className="text-sm text-slate-300 mt-3 leading-relaxed">Diseñamos sistemas solares inteligentes adaptados a tu consumo, respaldo y presupuesto.</div>
                </div>
                <div className="grid gap-4 relative z-10">
                  {[
                    ['zap', 'Especialistas en energía solar', 'Experiencia trabajando sistemas en Puerto Rico.'],
                    ['battery', 'Equipos premium y garantía', 'Opciones con baterías y componentes de calidad.'],
                    ['check', 'Financiamiento flexible', 'Opciones adaptadas según tu necesidad y crédito.'],
                    ['home', 'Instalación profesional', 'Soporte local y acompañamiento personalizado.'],
                  ].map(([iconName, title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <Icon name={iconName} className="h-6 w-6 text-yellow-300" />
                        </div>
                        <div>
                          <div className="font-bold text-base text-white leading-snug">{title}</div>
                          <div className="text-sm text-slate-300 mt-1 leading-relaxed">{text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="w-full px-6 pb-10 max-w-7xl mx-auto">
        <button
          type="button"
          className="w-full py-5 text-lg font-bold rounded-2xl shadow-xl text-white transition-transform hover:scale-[1.01]"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          onClick={handleSubmitLead}
          disabled={isSubmitting}
        >
          <span className="flex items-center justify-center gap-4 text-xl md:text-2xl tracking-wide">
            <Icon name="sun" className="h-6 w-6" />
            {isSubmitting ? 'ENVIANDO EVALUACIÓN...' : 'QUIERO MI PROPUESTA SOLAR GRATIS'}
            <Icon name="chevronRight" className="h-6 w-6" />
          </span>
        </button>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
          <Icon name="lock" className="h-4 w-4" />
          TU INFORMACIÓN ESTÁ 100% SEGURA Y NO SERÁ COMPARTIDA.
        </div>
        {submitStatus === 'success' && <div className="mt-4 rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-center text-sm font-semibold text-green-700">EVALUACIÓN ENVIADA CORRECTAMENTE. UN ESPECIALISTA DE HQS ENERGY SE COMUNICARÁ CONTIGO.</div>}
        {submitStatus === 'error' && <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-center text-sm font-semibold text-red-700">HUBO UN ERROR AL ENVIAR LA EVALUACIÓN. INTÉNTALO NUEVAMENTE.</div>}
      </div>

      <a
        href="https://wa.me/17879663451?text=Hola%20HQS%20Energy,%20quiero%20orientaci%C3%B3n%20sobre%20energ%C3%ADa%20solar."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl transition-transform hover:scale-105"
      >
        <Icon name="phone" className="h-5 w-5" />
        <span className="hidden sm:inline font-bold">Ayuda por WhatsApp</span>
      </a>
    </div>
  );
}
