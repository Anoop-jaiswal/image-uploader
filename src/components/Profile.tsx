const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="main-div w-[36%] rounded-lg overflow-hidden">
        <div className="relative div-2 border h-[120px] rounded-t-lg"></div>
        <div className="relative div-2 border h-40 rounded-b-lg">
          <div className="absolute w-[140px] h-[140px] border rounded-full flex items-center justify-center -mt-20 ml-10 overflow-hidden">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAMFBMVEXh4eGjo6OgoKDk5OTc3NzV1dWxsbHZ2dmsrKyoqKjCwsLJycm+vr7Gxsa5ubnQ0NCnSQuJAAADdklEQVR4nO2b23arIBBAleEO4v//7ZGkSUybKMg4uM6a/dLVvnSvQZC5OAwMwzAMwzAMw/wXAIA0xsjlZ2+VN2AwITlxx6Vghqv4wTDrLDbeyXp6voQdyMk9tF4IN8nudqD0X7ObnVa95fxns5ud7ykG8CVoj9B13LNyUy3LyW5uO2pZrpda2lNb5FIftWlfbZGbeqiZArOMoVfb3qKrwGnyvQpzYdjGcSaXKwxbj72qisM2jopWDQrOj2fgEu2iQkXYxpHUDVR52JbA0d5Iis7dpxvt+Rur1jSSulVsBfKXavHpdnMjPeGkrVpTS3mNY7eDXPh5u/Q+9VVrSpoMwlwVN9obnKyKG20mCDUb1RLfkULF/S0QX8qlK3Zz5Mn9RpHmV9joSzamNHCOPkGFwuulmHrUkoreW52qNUWr2mFFMyUJDXEas5ILu27UR9tKbh43a6odSiFruQ/1+6ea66mW+x7pq1vq32EIH0MnXLhAawYg6FGs/ZZfdLhIyw2G2VvxwvprtLMewKBCjCnGoC7l9QPc6a3BMAzDMAw+r9f8tV74i4icg09Ja2ut1in5MMuhs18eK1NTzLde8TYrlX/RcVK9Bs6W/6qidqMQX+aRlr87HRV1ALPX7yThSx6YUwdCPwDji8Reet7Q2Mlgi71efjacXr0EE1212d3ORXNq7FQ6JPbQS6dNPECT2cPujNiBTJtFo0K7M6ok8LnsccDOodfkIo7ZzQ51tACMxVNb5CzejgWFqpblsLbETuX0kBxStRUM0i54k3MoyyqRF/RHDmO+AIqbapVyvj1wpSOf9bR3bBAPtnfaj7nKKZUamp+48nHUeuY2tdIu6RFaO6s1MwPVbq0v/b3PABrUmj8ggLoplRraL3JnPXE4ffxTTjikS9wZjxza1yr4FxGBNmIACllOOLx0q25Eu8ANMxPc7MtXmyH38UGh3cvFiJ0/o+UzeHnMSg4nD8TM/9ZUDc5+UTttnLY5dThxTq/xoTvjUVvJLS/Xo3ZieYWeW1j9+p3urhrJd7xHql15BIgCkL7yIBajJ5ubAjmV18qFsLTfjENpJf9WvaduHAGYyW7X84VwdiLqevzRG5TX4nNDK/9Z+65zU7CEL0Rt3aP/dzN1VsdgLtBGzQbSqDlMPjOFWRk59O6frnkF6QLhYhiGYRiGYZhf/AMDHCI0D79QKwAAAABJRU5ErkJggg=="
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="text-end m-2">
            <button className="border shadow-md p-1 px-3 rounded-md">
              Update picture
            </button>
          </div>
          <div className="mt-10 ml-10">
            <h1 className="text-2xl font-bold">Jack Smith</h1>
            <h1> @kingjack • Senior Product Designer at Webflow • He/Him</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
