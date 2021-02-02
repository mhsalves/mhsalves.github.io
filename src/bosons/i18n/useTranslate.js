import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const useTranslate = (ptBrLang, enUsLang) => {
  const router = useRouter();

  switch(router.locale) {
    case 'pt-BR':
      return ptBrLang;
    case 'en-US':
      return enUsLang;
    default:
      return ptBrLang;
  }
};

export default useTranslate;