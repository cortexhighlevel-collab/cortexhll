import { useState, useEffect, useCallback } from "react";

const WHATSAPP_LINK = "https://wa.me/5547997422069";

const WhatsAppWidget = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const showTooltip = useCallback(() => setTooltipVisible(true), []);
  const hideTooltip = useCallback(() => setTooltipVisible(false), []);

  useEffect(() => {
    const showTimer = setTimeout(showTooltip, 5000);
    const hideTimer = setTimeout(hideTooltip, 15000);
    const alertTimer = setTimeout(() => setAlertVisible(true), 15000);

    const interval = setInterval(() => {
      showTooltip();
      setTimeout(hideTooltip, 10000);
    }, 25000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(alertTimer);
      clearInterval(interval);
    };
  }, [showTooltip, hideTooltip]);

  const openWhatsApp = () => window.open(WHATSAPP_LINK, "_blank");

  return (
    <>
      {/* Alert badge */}
      <span
        className="fixed right-5 bottom-[70px] w-[17px] h-[17px] z-[12] bg-red-600 text-white text-[11px] text-center rounded-full font-bold leading-[17px]"
        style={{ visibility: alertVisible ? "visible" : "hidden" }}
      >
        1
      </span>

      {/* Tooltip */}
      <div
        onClick={openWhatsApp}
        className="fixed right-[95px] bottom-[35px] bg-white px-1.5 py-1 text-xs leading-tight rounded-[10px] border border-[#e2e2e2] shadow-md z-[12] cursor-pointer font-dm"
        style={{
          width: 72,
          textWrap: "balance",
          transform: tooltipVisible ? "translateX(0)" : "translateX(100%)",
          opacity: tooltipVisible ? 1 : 0,
          visibility: tooltipVisible ? "visible" : "hidden",
          transition: "transform 0.5s, opacity 0.5s",
        }}
      >
        Precisa de ajuda?
        {/* Arrow */}
        <span
          className="absolute right-[-7px] bottom-3 w-0 h-0"
          style={{
            borderTop: "7px solid transparent",
            borderBottom: "7px solid transparent",
            borderLeft: "7px solid #fff",
          }}
        />
      </div>

      {/* WhatsApp icon */}
      <div
        onClick={openWhatsApp}
        className="fixed right-4 bottom-5 z-10 cursor-pointer"
      >
        <img
          src="https://zeph.com.br/wp-content/uploads/2025/12/zap.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="block"
        />
      </div>
    </>
  );
};

export default WhatsAppWidget;
