// Import and invoke the ticket booth component function

import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {FoodTicketHolders} from './food/FoodTicketHolder.js'
import {GameTicketHolders} from './games/GameTicketHolder.js'
import {ShowTicketHolders} from './sideshows/SideShowTicketHolders.js'
import {BigTicketHolders} from './bigTicket/BigTicketHolder.js'

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
ShowTicketHolders();
BigTicketHolders();