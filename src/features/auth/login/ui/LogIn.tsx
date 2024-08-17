import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from 'src/shared/assets/icons/login/logo.svg';
import Input from 'src/shared/ui/input/ui/Input';

const LogIn = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[100%] h-lvh flex flex-col gap-y-[120px] bg-white">
      <header className='flex justify-center border-b-[1px] border-b-[#D9DADC] p-4'>
        <Link to='/'>
          <img src={Logo} alt="Error!" />
        </Link>
      </header>

      <div className='flex justify-center'>
        <form className='flex flex-col gap-y-3 items-start'>
          <Input placeholder={t("email.placeholder")} text={t("email.text")} type='email' />
          <Input placeholder={t("password.placeholder")} text={t("password.text")} type='password'/>
          <a href='https://www.spotify.com/us/account/change-password/' target='_blank' className='hover:underline'>{t("forgot_password")}</a>
          <button className=''>Go to spotify account</button>
        </form>
      </div>
      
    </div>
  )
}

export { LogIn };