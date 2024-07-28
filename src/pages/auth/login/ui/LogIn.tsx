import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from 'src/shared/assets/icons/login/logo.svg';
import Input from 'src/shared/ui/input/ui/Input';
import Button from 'src/shared/ui/button/ui/Button';

const LogIn = () => {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data: object) => {
    console.log(data);
  }

  return (
    <div className="w-[100%] h-lvh flex flex-col gap-y-[120px] bg-white">
      <header className='flex justify-center border-b-[1px] border-b-[#D9DADC] p-4'>
        <Link to='/'>
          <img src={Logo} alt="Error!" />
        </Link>
      </header>

      <div className='flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3 items-start'>
          <Input placeholder={t("email.placeholder")} text={t("email.text")} type='email' />
          <Input placeholder={t("password.placeholder")} text={t("password.text")} type='password'/>
          <a href='https://www.spotify.com/us/account/change-password/' target='_blank' className='hover:underline'>{t("forgot_password")}</a>
          <Button bgColor='#1ED760' borderRadius={500} paddingX={33} paddingY={15} text={t("login")} textSize={15} textBold='bold'/>
        </form>
      </div>
    </div>
  )
}

export { LogIn };