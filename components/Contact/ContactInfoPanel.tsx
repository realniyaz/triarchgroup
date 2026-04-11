import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

export default function ContactInfoPanel() {
  return (
    <div className="space-y-10">

      {/* CONTACT INFO */}
      <div>
        <h3 className="text-xl font-bold mb-6">
          Contact Information
        </h3>

        <div className="space-y-6">
          <InfoItem
            title="Phone"
            value="+91 93159 56745 | +91 95690 96741"
            icon={<Phone size={18} />}
          />
          <InfoItem
            title="Headquarters"
            value="Remotely Operated"
            icon={<MapPin size={18} />}
          />
        </div>
      </div>

      {/* HOW WE OPERATE */}
      <div
        className="bg-slate-50 rounded-2xl p-6 border
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-blue-300"
      >
        <h4 className="font-semibold mb-3">
          How We Operate
        </h4>

        <p className="text-sm text-slate-600">
          We are a fully remote, globally distributed team. This allows us to
          serve clients across all time zones with flexibility and efficiency.
        </p>

        <p className="mt-4 text-sm text-blue-600 font-medium flex items-center gap-2">
          <MapPin size={16} />
          Global Headquarters – Remotely Operated
        </p>
      </div>

      {/* SOCIAL */}
      <div>
        <h4 className="font-semibold mb-4">
          Follow Us
        </h4>

        <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/triarchgroup" target="_blank" rel="noreferrer">
        <SocialIcon>in</SocialIcon>
      </a>


      <a href="https://www.instagram.com/triarch_group/" target="_blank" rel="noreferrer">
        <SocialIcon>
          <FaInstagram size={18} />
        </SocialIcon>
      </a>

      <a href="https://www.facebook.com/profile.php?id=61572116851109" target="_blank" rel="noreferrer">
        <SocialIcon>
          <FaFacebook size={18} />
        </SocialIcon>
      </a>
        </div>
      </div>

    </div>
  );
}

/* ------------------ */

function InfoItem({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

/* ✅ FIXED HERE */
function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-full
      bg-slate-100
      flex items-center justify-center
      text-slate-600
      cursor-pointer
      transition-all
      hover:bg-blue-100
      hover:text-blue-600
      hover:-translate-y-0.5"
    >
      {children}
    </div>
  );
}
