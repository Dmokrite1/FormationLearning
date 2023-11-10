import format from "date-fns/format";
import { fr } from "date-fns/locale"

const todayDate = new Date();
const todayDateFormat = format(todayDate, "dd/MMMM/yyy", {locale:fr});
console.log(todayDateFormat);