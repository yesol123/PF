import { SectionTitle } from "../../shared/ui/SectionTitle";
import "./ContactSection.css";

const contacts = [
  {
    label: "GitHub",
    value: "yesol123",
    href: "https://github.com/yesol123",
  },
  {
    label: "Velog",
    value: "@yescarrot/posts",
    href: "https://velog.io/@yescarrot/posts",
  },
  {
    label: "Email",
    value: "kys4255@naver.com",
    href: "mailto:kys4255@naver.com",
  },
  {
    label: "Phone",
    value: "010-8018-3309",
    href: "tel:01080183309",
  },
  {
    label: "Location",
    value: "경기도 성남시 중원구",
  },
];

export function ContactSection() {
  return (
    <section id="contact">
      <SectionTitle
        title="Contact"
        subtitle="협업 제안이나 포지션 문의를 환영합니다."
      />
      <ul className="contactList">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <span>{contact.label}</span>
            {contact.href ? (
              <a
                href={contact.href}
                target={
                  contact.href.startsWith("http://") ||
                  contact.href.startsWith("https://")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http://") ||
                  contact.href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {contact.value}
              </a>
            ) : (
              <p>{contact.value}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
