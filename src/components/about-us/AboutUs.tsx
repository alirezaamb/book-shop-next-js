
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AddCardTwoToneIcon from '@mui/icons-material/AddCardTwoTone';
import CheckIcon from '@mui/icons-material/Check';

import Image from "next/image";


const AboutUsPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container direction={"column"} spacing={3} sx={{margin:"1% 0 0 0", width:"100%"}}>
        <Box
          sx={{
            backgroundImage: "url(photo/Page_19.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            direction: "ltr", 
            padding: "40px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Card sx={{ width:"50%"}}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  درباره فروشگاه کتاب
                </Typography>
                <Typography>
                  فروشگاه آنلاین کتاب و محصولات فرهنگی ما با تکیه بر تجربه
                  سال‌ها کتابفروشی، نگاهی به آینده و با هدف سهولت دسترسی
                  علاقمندان به کتاب و محصولات فرهنگی، در فضای مجازی متولد شده
                  است. در فروشگاه آنلاین کتاب تلاش کرده‌ایم با همان رویکرد
                  همیشگی که خدمت‌رسانی با کیفیت بوده، کتاب و محصولات فرهنگی را
                  به دست مخاطبانمان برسانیم. از این پس با کامپیوترهای شخصی و یا
                  با تلفن‌های همراهتان از محل کار، در وسایل نقلیه، از خانه و
                  هرکجا که هستید می‌توانید به دنیای کتاب سفر کنید چون فروشگاه
                  کتاب به شما نزدیک‌تر شده است. فروشگاه کتاب محل تلاقی دست‌ها و
                  اندیشه‌هایی‌ست که فردا را پرنورتر، شاد‌تر و آگاه‌تر می‌خواهند.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
        <Box 
          sx={{
            display:"flex",
            bgcolor: '#FFC14D',
            marginTop: "2%",
            padding: "3%",
            height: "30%",
          
        }}>
          <Card sx={{width:"30%", height:"10%", marginTop:"3%", paddingX:"9%",marginX:"1%", marginRight:"3%"}}>
            <CardContent sx={{display:"flex", gap:"7%"}}>
             <Typography>روش ارسال</Typography>
             <ShoppingCartTwoToneIcon sx={{color:"#FFC14D"}} />
            </CardContent>
          </Card>
          <Card sx={{width:"30%", height:"10%", marginTop:"3%", paddingX:"7%",marginX:"1%"}}>
            <CardContent sx={{display:"flex", gap:"7%"}}>
             <Typography>خرید از طریق شتاب</Typography>
             <AddCardTwoToneIcon sx={{color:"#FFC14D"}}/>
            </CardContent>
          </Card>
          <Card sx={{width:"30%", height:"10%", marginTop:"3%", paddingX:"8%",marginX:"1%"}}>
            <CardContent sx={{display:"flex", gap:"7%"}}>
             <Typography>ضمانت ارسال</Typography>
             <CheckIcon sx={{color:"#FFC14D"}}/>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            direction: "ltr",
            padding: "40px",
            marginTop: "2%",
            display: "flex", 
            gap:"15%",
            width: "100%"
          }}
        >
          <Image
      src="/photo/Page_18.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          <Grid item xs={12} md={6}>
            <Card sx={{ width:"80%", marginTop:"20%" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  مسئولیت اجتماعی
                </Typography>
               
               <Typography sx={{textAlign:"justify"}}>
                  همه‌ی ما مسئولیم‌؛ نسبت به یکدیگر، نسبت به جامعه‌ای که در آن
                  زندگی می‌کنیم و نسبت به محیط زیستمان.‌فروشگاه کتاب به سهم خود
                  در تمام این حوزه‌ها قدمی هرچند کوچک برداشته و تلاش می‌کند
                  فعالیت‌های خود در زمینه‌ی مسئولیت اجتماعی را گسترش دهد و در
                  این مسیر از ایده‌ها و پیشنهادهای تمام همراهان دغدغه‌مند خود
                  استقبال می‌کند.‌گزیده‌ای از تلاش‌های مجموعه فروشگاه کتاب با
                  موضوع مسئولیت اجتماعی:<br/> - فروشگاه کتاب بی پلاستیک <br/>-انجمن
                  حامی‌
                </Typography>
              
              </CardContent>
            </Card>
          </Grid>
        </Box>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                عضویت در خبرنامه‌ی فروشگاه کتاب
              </Typography>
              <Typography variant="body2" align="center">
                برای اطلاع از تخفیف‌ها، فروش‌های ویژه و پیشنهادها، در خبرنامه‌ی
                ما عضو شوید.
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1}}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="آدرس ایمیل شما"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone number"
                  label="شماره تلفن شما"
                  type="number"
                  id="phone number"
                  autoComplete="current-number"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ثبت نام
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;
