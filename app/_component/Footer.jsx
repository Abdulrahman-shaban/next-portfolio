import { useTranslations } from "next-intl";
export default function Footer() {
    const date=new Date()
    const t = useTranslations('Index');
  return (
    <div className='text-center bg-bgPrimary py-5 border-t-2'>
      {t('footer')} © {date.getFullYear()}
    </div>
  )
}
