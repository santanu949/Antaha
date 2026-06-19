import React from "react";
import {
  ArrowLeft,
  Flame,
  Calendar,
  Send,
  FileText,
  ArrowRightLeft,
} from "lucide-react";

const IMG_WOMAN =
  "https://images.pexels.com/photos/6347564/pexels-photo-6347564.jpeg?auto=compress&cs=tinysrgb&w=600";
const IMG_RUNNER =
  "https://images.pexels.com/photos/33070102/pexels-photo-33070102.jpeg?auto=compress&cs=tinysrgb&w=600";

// Small avatar dots used in Saudi Arabian GP list
const Avatar = ({ color }) => (
  <div
    className="w-5 h-5 rounded-full border border-white/30"
    style={{ background: color }}
  />
);

export default function FloatingCards() {
  return (
    <div className="absolute inset-0">
      {/* ============ BACKGROUND PHOTO CARD - Woman with cube ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "60px",
          top: "30px",
          width: "230px",
          height: "270px",
          transform: "rotate(-4deg)",
          zIndex: 5,
        }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_18px_40px_-12px_rgba(0,0,0,0.18)] bg-white">
          <img
            src={IMG_WOMAN}
            alt="cube"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ============ EXCHANGE - Lime green ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "260px",
          top: "0px",
          width: "260px",
          height: "200px",
          transform: "rotate(3deg)",
          zIndex: 10,
        }}
      >
        <div
          className="w-full h-full rounded-2xl shadow-[0_18px_40px_-10px_rgba(190,242,38,0.4)] p-5 flex flex-col justify-between"
          style={{ background: "#c4ec3a" }}
        >
          <div className="flex items-center justify-between text-[12px] font-medium text-black/80">
            <span>Exchange</span>
            <span className="flex items-center gap-1">
              USD <ArrowRightLeft className="w-3 h-3" /> EUR
            </span>
          </div>
          <div className="text-[44px] font-bold text-black tracking-tight leading-none">
            $285.72
          </div>
          <div className="text-[11px] text-black/60 leading-tight">
            Real-time
            <br />
            currency rate
          </div>
        </div>
      </div>

      {/* ============ CALORIES BURNED - Orange ============ */}
      <div
        className="float-card absolute"
        style={{
          right: "30px",
          top: "60px",
          width: "200px",
          height: "240px",
          transform: "rotate(8deg)",
          zIndex: 12,
        }}
      >
        <div
          className="w-full h-full rounded-2xl p-5 shadow-[0_18px_40px_-10px_rgba(249,115,22,0.45)] text-white flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(160deg, #fb923c 0%, #f97316 55%, #ea580c 100%)",
          }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium">
              <Flame className="w-3.5 h-3.5" />
              Calories Burned
            </div>
            <div className="text-[10px] opacity-80 mt-0.5">Daily Limit</div>
          </div>
          <div className="text-[56px] font-bold leading-none tracking-tight">
            11,840
          </div>
        </div>
      </div>

      {/* ============ SAUDI ARABIAN GP - Black ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "230px",
          top: "200px",
          width: "230px",
          height: "240px",
          transform: "rotate(-3deg)",
          zIndex: 20,
        }}
      >
        <div className="w-full h-full rounded-2xl bg-black p-4 text-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-[12px]">
              F1
            </div>
            <div>
              <div className="text-[12px] font-semibold leading-tight">
                Saudi Arabian GP
              </div>
              <div className="text-[10px] text-white/60">Tomorrow, 00:00</div>
            </div>
          </div>
          <div className="text-[11px] text-white/70 mb-2">Starting Grid</div>
          <div className="space-y-2">
            {[
              { color: "#ef4444", name: "1. Ma..." },
              { color: "#f59e0b", name: "2. On..." },
              { color: "#3b82f6", name: "3. G..." },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <Avatar color={d.color} />
                <span className="text-[11px]">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SCREEN TIME - White ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "400px",
          top: "230px",
          width: "230px",
          height: "260px",
          transform: "rotate(4deg)",
          zIndex: 22,
        }}
      >
        <div className="w-full h-full rounded-2xl bg-white p-4 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-2 mb-3">
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-700" />
            <span className="text-[12px] font-semibold text-neutral-900">
              Screen Time
            </span>
          </div>
          <div className="grid grid-cols-2 bg-neutral-100 rounded-full p-1 text-[10px] font-medium mb-3">
            <span className="bg-white rounded-full py-1 text-center text-neutral-900 shadow-sm">
              Daily
            </span>
            <span className="text-center py-1 text-neutral-500">Weekly</span>
          </div>
          <div className="text-[10px] text-neutral-500 mb-1">
            Daily Average
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[32px] font-bold text-neutral-900 leading-none">
              8h 28m
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +12.56%
            </span>
          </div>
          {/* Stacked bars chart */}
          <div className="mt-3 flex items-end justify-between h-[60px] gap-1.5">
            {[40, 70, 55, 80, 65].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm overflow-hidden flex flex-col-reverse"
                style={{ height: `${h}%` }}
              >
                <div style={{ height: "30%", background: "#fb923c" }} />
                <div style={{ height: "30%", background: "#ec4899" }} />
                <div style={{ height: "40%", background: "#8b5cf6" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ VIDEO STABILIZATION - White ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "295px",
          top: "330px",
          width: "190px",
          height: "190px",
          transform: "rotate(-6deg)",
          zIndex: 25,
        }}
      >
        <div className="w-full h-full rounded-2xl bg-white p-4 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.18)] flex flex-col justify-between">
          <div className="text-[22px] font-bold text-neutral-900 leading-tight">
            Video
            <br />
            Stabilizat...
          </div>
          <div className="text-[10px] text-neutral-500 leading-snug">
            Smooth out shaky foo
            <br />
            professional look.
          </div>
        </div>
      </div>

      {/* ============ SCREEN LIGHT - Dark ============ */}
      <div
        className="float-card absolute"
        style={{
          right: "70px",
          top: "300px",
          width: "150px",
          height: "180px",
          transform: "rotate(10deg)",
          zIndex: 18,
        }}
      >
        <div
          className="w-full h-full rounded-2xl p-4 text-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.4)]"
          style={{
            background:
              "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
          }}
        >
          <div className="text-[18px] font-semibold leading-tight">
            Screen Light
          </div>
          <div className="text-[9px] text-white/60 mt-1">Brightness</div>
        </div>
      </div>

      {/* ============ MONTHLY REVENUE - Purple gradient ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "165px",
          top: "440px",
          width: "200px",
          height: "150px",
          transform: "rotate(-7deg)",
          zIndex: 28,
        }}
      >
        <div
          className="w-full h-full rounded-2xl p-4 text-white shadow-[0_20px_45px_-10px_rgba(139,92,246,0.4)]"
          style={{
            background:
              "linear-gradient(160deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)",
          }}
        >
          <div className="text-[11px] font-medium">Monthly Revenue</div>
          <div className="text-[28px] font-bold leading-none mt-2">$12,</div>
          <div className="text-[9px] opacity-70 mt-2">16. Apr -</div>
          <svg viewBox="0 0 100 30" className="mt-1 w-full h-6">
            <polyline
              points="0,20 20,10 40,18 60,8 80,15 100,5"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>

      {/* ============ FILE: List of Elements ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "75px",
          top: "330px",
          width: "165px",
          height: "55px",
          transform: "rotate(-2deg)",
          zIndex: 26,
        }}
      >
        <div className="w-full h-full rounded-xl bg-white p-2.5 shadow-[0_12px_25px_-8px_rgba(0,0,0,0.15)] flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-md bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">
            XLS
          </div>
          <div>
            <div className="text-[11px] font-semibold text-neutral-900">
              List of Eleme...
            </div>
            <div className="text-[9px] text-neutral-400">3.6 MB</div>
          </div>
        </div>
      </div>

      {/* ============ FILE: Vintage PDF ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "50px",
          top: "470px",
          width: "165px",
          height: "55px",
          transform: "rotate(-4deg)",
          zIndex: 26,
        }}
      >
        <div className="w-full h-full rounded-xl bg-white p-2.5 shadow-[0_12px_25px_-8px_rgba(0,0,0,0.15)] flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-md bg-red-500 flex items-center justify-center text-white text-[9px] font-bold">
            PDF
          </div>
          <div>
            <div className="text-[11px] font-semibold text-neutral-900">
              Vintage
            </div>
            <div className="text-[9px] text-neutral-400">3.5 MB</div>
          </div>
        </div>
      </div>

      {/* ============ +45% Yellow Circle ============ */}
      <div
        className="absolute"
        style={{ left: "180px", top: "360px", zIndex: 8 }}
      >
        <div
          className="w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center text-black shadow-[0_15px_30px_-8px_rgba(250,204,21,0.5)]"
          style={{ background: "#fde047" }}
        >
          <div className="text-[26px] font-bold leading-none">
            +45<span className="text-[16px] align-top">%</span>
          </div>
          <div className="text-[9px] mt-1 text-black/70">vs last month</div>
        </div>
      </div>

      {/* ============ Small purple dot ============ */}
      <div
        className="absolute rounded-full"
        style={{
          left: "330px",
          top: "470px",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #a855f7, #6366f1)",
          zIndex: 7,
        }}
      />

      {/* ============ Small blue dot ============ */}
      <div
        className="absolute rounded-full"
        style={{
          left: "415px",
          top: "480px",
          width: "32px",
          height: "32px",
          background: "#3b82f6",
          zIndex: 7,
        }}
      />

      {/* ============ Calendar Icon circle (right of stack) ============ */}
      <div
        className="absolute"
        style={{ right: "120px", top: "470px", zIndex: 30 }}
      >
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
          <Calendar className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* ============ Print Mode - runner photo ============ */}
      <div
        className="float-card absolute"
        style={{
          right: "20px",
          top: "440px",
          width: "180px",
          height: "150px",
          transform: "rotate(6deg)",
          zIndex: 24,
        }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] relative">
          <img
            src={IMG_RUNNER}
            alt="runner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute top-3 left-3 text-white text-[15px] font-semibold drop-shadow">
            rint Mode
          </div>
        </div>
      </div>

      {/* ============ Design Components - Glass folder card ============ */}
      <div
        className="float-card absolute"
        style={{
          left: "calc(50% - 175px)",
          top: "440px",
          width: "350px",
          height: "200px",
          transform: "rotate(-2deg)",
          zIndex: 35,
        }}
      >
        <div
          className="w-full h-full rounded-3xl p-6 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] relative overflow-hidden backdrop-blur-md"
          style={{
            background:
              "linear-gradient(160deg, rgba(96,165,250,0.85) 0%, rgba(59,130,246,0.75) 50%, rgba(30,64,175,0.65) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          {/* folder tab */}
          <div
            className="absolute -top-3 left-8 w-24 h-6 rounded-t-lg"
            style={{ background: "rgba(96,165,250,0.85)" }}
          />
          <div className="absolute bottom-5 left-6 right-6">
            <div className="text-[36px] font-semibold leading-[1.05] tracking-tight">
              Design
              <br />
              Components
            </div>
          </div>
        </div>
      </div>

      {/* ============ Small send/paper plane circle bottom-left ============ */}
      <div
        className="absolute"
        style={{ left: "115px", top: "565px", zIndex: 30 }}
      >
        <div className="w-11 h-11 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
          <Send className="w-4 h-4 text-neutral-500" />
        </div>
      </div>

      {/* ============ Tiny W1 label bottom-left under monthly revenue ============ */}
      <div
        className="absolute text-[9px] text-neutral-400 font-mono"
        style={{ left: "260px", top: "610px", zIndex: 5 }}
      >
        W1
      </div>
    </div>
  );
}
