import { ReactComponent as UserAccountIcon } from "../../logos/user-account.svg";
import { ReactComponent as FlipkartPlusZoneIcon } from "../../logos/flipkart-plus-zone.svg";
import { ReactComponent as OrdersIcon } from "../../logos/orders.svg";
import { ReactComponent as WishListIcon } from "../../logos/wishlist.svg";
import { ReactComponent as RewardsIcon } from "../../logos/rewards.svg";
import { ReactComponent as GiftCardsIcon } from "../../logos/git-cards.svg";

const loginOptions = [
  {
    name: "My Proflile",
    icon: UserAccountIcon,
  },

  {
    name: "Flipkart Plus Zone",
    icon: FlipkartPlusZoneIcon,
  },

  {
    name: "Orders",
    icon: OrdersIcon,
  },

  {
    name: "Whislist",
    icon: WishListIcon,
  },

  {
    name: "Rewards",
    icon: RewardsIcon,
  },

  {
    name: "Gift Cards",
    icon: GiftCardsIcon,
  },
];

const moreOptions = [
  {
    name: "FALANA",
    icons: GiftCardsIcon,
  },
];

export { loginOptions, moreOptions };
