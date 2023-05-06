// Please use this component when ever you need an icon
// If you need a new icon, add and import it from here
// https://mui.com/components/material-icons/
import * as React from "react"
import DiveIcon from "@mui/icons-material/ScubaDiving"
import MailIcon from "@mui/icons-material/Mail"
import DefaultIcon from "@mui/icons-material/DisabledByDefault"
import HomeIcon from "@mui/icons-material/Home"
import CompanyIcon from "@mui/icons-material/Business"
import UnlockIcon from "@mui/icons-material/LockOpen"
import TelegramIcon from "@mui/icons-material/Telegram"
import ContactIcon from "@mui/icons-material/ConnectWithoutContact"
import WhatsApp from "@mui/icons-material/WhatsApp"
import CTAIcon from "@mui/icons-material/MyLocation"
import FishIcon from "@mui/icons-material/Phishing"
import RegionIcon from "@mui/icons-material/LocationCity"
import VersionIcon from "@mui/icons-material/ElectricBolt"
import LogoIcon from "@mui/icons-material/Image"
import RocketIcon from "@mui/icons-material/RocketLaunch"
import DarkIcon from "@mui/icons-material/Brightness4"
import LightIcon from "@mui/icons-material/Brightness7"
import ExampleIcon from "@mui/icons-material/AssistantDirection"
import DomainIcon from "@mui/icons-material/Domain"
import SitesIcon from "@mui/icons-material/Language"
import InitIcon from "@mui/icons-material/NotStarted"
import TextIcon from "@mui/icons-material/TextFields"
import AddDocIcon from "@mui/icons-material/PostAdd"
import TableChartIcon from "@mui/icons-material/StorageOutlined"
import CSVIcon from "@mui/icons-material/FileUpload"
import FeaturesIcon from "@mui/icons-material/Dashboard"
import DevtoolsIcon from "@mui/icons-material/BugReport"
import NotifyIcon from "@mui/icons-material/Notifications"
import ListIcon from "@mui/icons-material/List"
import MoreIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import SeedIcon from "@mui/icons-material/Spa"
import FlyIcon from "@mui/icons-material/LocalAirportRounded"
import RefreshIcon from "@mui/icons-material/Refresh"
import MapIcon from "@mui/icons-material/LocationDisabled"
import MenuIcon from "@mui/icons-material/Menu"
import TrashIcon from "@mui/icons-material/DeleteOutlined"
import VisibilityIcon from "@mui/icons-material/Visibility"
import ExitIcon from "@mui/icons-material/ExitToAppRounded"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import FilebrowserIcon from "@mui/icons-material/Attachment"
import ImagefileIcon from "@mui/icons-material/Image"
import HelpIcon from "@mui/icons-material/HelpOutlineTwoTone"
import LocaleIcon from "@mui/icons-material/Language"
import PersonaIcon from "@mui/icons-material/AccessibilityNew"
import GitHubIcon from "@mui/icons-material/GitHub"
import WalkthroughIcon from "@mui/icons-material/Accessibility"
import DocIcon from "@mui/icons-material/AutoStories"
import SharedIcon from "@mui/icons-material/ShareOutlined"
import AddIcon from "@mui/icons-material/Add"
import ErrorIcon from "@mui/icons-material/NewReleases"
import GestureIcon from "@mui/icons-material/Gesture"
import SectionIcon from "@mui/icons-material/Assignment"
import BashIcon from "@mui/icons-material/Terminal"
import CloseIcon from "@mui/icons-material/Close"
import BannerIcon from "@mui/icons-material/Movie"
import CancelIcon from "@mui/icons-material/Cancel"
import SettingsIcon from "@mui/icons-material/Settings"
import CoderIcon from "@mui/icons-material/DesktopAccessDisabledSharp"
import CodeIcon from "@mui/icons-material/Code"
import SupportIcon from "@mui/icons-material/SupportAgent"
import ArrowRIcon from "@mui/icons-material/ArrowForwardTwoTone"
import ArrowLIcon from "@mui/icons-material/ArrowBackTwoTone"
import ArrowUIcon from "@mui/icons-material/ArrowUpwardTwoTone"
import ArrowDIcon from "@mui/icons-material/ArrowDownwardTwoTone"
import SearchIcon from "@mui/icons-material/Search"
import MarkdownIcon from "@mui/icons-material/Article"
import CalendarIcon from "@mui/icons-material/CalendarToday"
import PrintIcon from "@mui/icons-material/Print"
import TypeScriptIcon from "@mui/icons-material/IntegrationInstructions"
import DesignIcon from "@mui/icons-material/Palette"
import ReduxIcon from "@mui/icons-material/Code"
import LinkIcon from "@mui/icons-material/Link"
import RouterIcon from "@mui/icons-material/DynamicForm"
import NewsIcon from "@mui/icons-material/Newspaper"
import NewIcon from "@mui/icons-material/Add"
import QuitIcon from "@mui/icons-material/ExitToApp"
import TickIcon from "@mui/icons-material/Check"
import PersonIcon from "@mui/icons-material/Person"
import WardsIcon from "@mui/icons-material/AirlineSeatFlat"
import ClinicsIcon from "@mui/icons-material/MedicalServices"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PatientsIcon from "@mui/icons-material/People"
import FilterIcon from "@mui/icons-material/Sort"
import ClinicalIcon from "@mui/icons-material/AccountBox"
import ClericalIcon from "@mui/icons-material/AirlineSeatLegroomNormal"
import AdminIcon from "@mui/icons-material/AdminPanelSettings"
import DeveloperIcon from "@mui/icons-material/ToysOutlined"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import AccExpandIcon from "@mui/icons-material/ExpandMore"
import ArchiveIcon from "@mui/icons-material/ArchiveOutlined"
import SkiingIcon from "@mui/icons-material/DownhillSkiing"
import StarIcon from "@mui/icons-material/Star"
import VikingIcon from "@mui/icons-material/Castle"
import AuthIcon from "@mui/icons-material/Security"
import SendIcon from "@mui/icons-material/Send"
import YouIcon from "@mui/icons-material/AdminPanelSettings"
import HostIcon from "@mui/icons-material/AppShortcut"

export default function Icon(props: any) {
  let { icon, color } = props
  if (!color) color = "inherit"
  let iconFragment = <React.Fragment />

  switch (icon) {
    case "apps":
      iconFragment = <HostIcon color={color} />
      break

    case "app":
      iconFragment = <HostIcon color={color} />
      break

    case "host":
      iconFragment = <HostIcon color={color} />
      break

    case "you":
      iconFragment = <YouIcon color={color} />
      break

    case "dive":
      iconFragment = <DiveIcon color={color} />
      break

    case "company":
      iconFragment = <CompanyIcon color={color} />
      break

    case "whatsapp":
      iconFragment = <WhatsApp color={color} />
      break

    case "send":
      iconFragment = <SendIcon color={color} />
      break

    case "telegram":
      iconFragment = <TelegramIcon color={color} />
      break

    case "dark":
      iconFragment = <DarkIcon color={color} />
      break

    case "light":
      iconFragment = <LightIcon color={color} />
      break

    case "contact":
      iconFragment = <ContactIcon color={color} />
      break

    case "unlock":
      iconFragment = <UnlockIcon color={color} />
      break

    case "email":
      iconFragment = <MailIcon color={color} />
      break

    case "auth":
      iconFragment = <AuthIcon color={color} />
      break

    case "star":
      iconFragment = <StarIcon color={color} />
      break

    case "cta":
      iconFragment = <CTAIcon color={color} />
      break

    case "viking":
      iconFragment = <VikingIcon color={color} />
      break

    case "home":
      iconFragment = <HomeIcon color={color} />
      break

    case "region":
      iconFragment = <RegionIcon color={color} />
      break

    case "logo":
      iconFragment = <LogoIcon color={color} />
      break

    case "seo":
      iconFragment = <VersionIcon color={color} />
      break

    case "version":
      iconFragment = <VersionIcon color={color} />
      break

    case "persona":
      iconFragment = <PersonaIcon color={color} />
      break

    case "filter":
      iconFragment = <FilterIcon color={color} />
      break

    case "acc":
      iconFragment = <AccExpandIcon color={color} />
      break

    case "domain":
      iconFragment = <DomainIcon color={color} />
      break

    case "expand":
      iconFragment = <AccExpandIcon color={color} />
      break

    case "archive":
      iconFragment = <ArchiveIcon color={color} />
      break

    case "features":
      iconFragment = <FeaturesIcon color={color} />
      break

    case "fish":
      iconFragment = <FishIcon color={color} />
      break

    case "ski":
      iconFragment = <SkiingIcon color={color} />
      break

    case "notify":
      iconFragment = <NotifyIcon color={color} />
      break

    case "csv":
      iconFragment = <CSVIcon color={color} />
      break

    case "list":
      iconFragment = <ListIcon color={color} />
      break

    case "save":
      iconFragment = <SaveIcon color={color} />
      break

    case "more":
      iconFragment = <MoreIcon color={color} />
      break

    case "fly":
      iconFragment = <FlyIcon color={color} />
      break

    case "fullscreen":
      iconFragment = <FullscreenIcon color={color} />
      break

    case "twitter":
      iconFragment = <TwitterIcon color={color} />
      break

    case "adddoc":
      iconFragment = <AddDocIcon color={color} />
      break

    case "edit":
      iconFragment = <EditIcon color={color} />
      break

    case "facebook":
      iconFragment = <FacebookIcon color={color} />
      break

    case "map":
      iconFragment = <MapIcon color={color} />
      break

    case "plus":
      iconFragment = <AddIcon color={color} />
      break

    case "add":
      iconFragment = <AddIcon color={color} />
      break

    case "test":
      iconFragment = <DevtoolsIcon color={color} />
      break

    case "devtools":
      iconFragment = <DevtoolsIcon color={color} />
      break

    case "sites":
      iconFragment = <SitesIcon color={color} />
      break

    case "site":
      iconFragment = <SitesIcon color={color} />
      break

    case "youtube":
      iconFragment = <YouTubeIcon color={color} />
      break

    case "careers":
      iconFragment = <SeedIcon color={color} />
      break

    case "linkedin":
      iconFragment = <LinkedInIcon color={color} />
      break

    case "clinical":
      iconFragment = <ClinicalIcon color={color} />
      break

    case "clerical":
      iconFragment = <ClericalIcon color={color} />
      break

    case "admin":
      iconFragment = <AdminIcon color={color} />
      break
    case "developer":
      iconFragment = <DeveloperIcon color={color} />
      break

    case "logout":
      iconFragment = <ExitIcon color={color} />
      break

    case "exit":
      iconFragment = <ExitIcon color={color} />
      break

    case "clear":
      iconFragment = <TrashIcon color={color} />
      break

    case "error":
      iconFragment = <ErrorIcon color={color} />
      break
    case "patient":
      iconFragment = <PatientsIcon color={color} />
      break
    case "patients":
      iconFragment = <PatientsIcon color={color} />
      break
    case "dashboard":
      iconFragment = <DashboardIcon color={color} />
      break
    case "users":
      iconFragment = <PersonIcon color={color} />
      break
    case "user":
      iconFragment = <PersonIcon color={color} />
      break
    case "wards":
      iconFragment = <WardsIcon color={color} />
      break
    case "ward":
      iconFragment = <WardsIcon color={color} />
      break
    case "clinics":
      iconFragment = <ClinicsIcon color={color} />
      break
    case "clinic":
      iconFragment = <ClinicsIcon color={color} />
      break

    case "quit":
      iconFragment = <QuitIcon color={color} />
      break
    case "visibilityoff":
      iconFragment = <VisibilityOffIcon color={color} />
      break

    case "preview":
      iconFragment = <VisibilityIcon color={color} />
      break

    case "visibility":
      iconFragment = <VisibilityIcon color={color} />
      break

    case "tick":
      iconFragment = <TickIcon color={color} />
      break

    case "services":
      iconFragment = <RouterIcon color={color} />
      break

    case "feature":
      iconFragment = <DashboardIcon color={color} />
      break

    case "news":
      iconFragment = <NewsIcon color={color} />
      break

    case "delete":
      iconFragment = <DeleteIcon color={color} />
      break

    case "form":
      iconFragment = <RouterIcon color={color} />
      break

    case "router":
      iconFragment = <RouterIcon color={color} />
      break

    case "new":
      iconFragment = <NewIcon color={color} />
      break

    case "link":
      iconFragment = <LinkIcon color={color} />
      break
    case "redux":
      iconFragment = <ReduxIcon color={color} />
      break
    case "design":
      iconFragment = <DesignIcon color={color} />
      break
    case "theme":
      iconFragment = <DesignIcon color={color} />
      break
    case "init":
      iconFragment = <InitIcon color={color} />
      break

    case "typescript":
      iconFragment = <TypeScriptIcon color={color} />
      break
    case "search":
      iconFragment = <SearchIcon color={color} />
      break
    case "print":
      iconFragment = <PrintIcon color={color} />
      break
    case "calendar":
      iconFragment = <CalendarIcon color={color} />
      break
    case "markdown":
      iconFragment = <MarkdownIcon color={color} />
      break
    case "back":
      iconFragment = <ArrowLIcon color={color} />
      break
    case "arrowl":
      iconFragment = <ArrowLIcon color={color} />
      break
    case "left":
      iconFragment = <ArrowLIcon color={color} />
      break
    case "arrowr":
      iconFragment = <ArrowRIcon color={color} />
      break

    case "start":
      iconFragment = <ArrowRIcon color={color} />
      break

    case "rocket":
      iconFragment = <RocketIcon color={color} />
      break

    case "right":
      iconFragment = <ArrowRIcon color={color} />
      break
    case "down":
      iconFragment = <ArrowDIcon color={color} />
      break
    case "up":
      iconFragment = <ArrowUIcon color={color} />
      break
    case "forward":
      iconFragment = <ArrowRIcon color={color} />
      break
    case "code":
      iconFragment = <CodeIcon color={color} />
      break

    case "coder":
      iconFragment = <CoderIcon color={color} />
      break
    case "support":
      iconFragment = <SupportIcon color={color} />
      break
    case "settings":
      iconFragment = <SettingsIcon color={color} />
      break
    case "section":
      iconFragment = <SectionIcon color={color} />
      break
    case "invalid":
      iconFragment = <CloseIcon color={color} />
      break
    case "cancel":
      iconFragment = <CancelIcon color={color} />
      break
    case "close":
      iconFragment = <CloseIcon color={color} />
      break
    case "bash":
      iconFragment = <BashIcon color={color} />
      break

    case "gesture":
      iconFragment = <GestureIcon color={color} />
      break

    case "faq":
      iconFragment = <HelpIcon color={color} />
      break

    case "help":
      iconFragment = <HelpIcon color={color} />
      break

    case "post":
      iconFragment = <DocIcon color={color} />
      break

    case "crud":
      iconFragment = <DocIcon color={color} />
      break

    case "example":
      iconFragment = <ExampleIcon color={color} />
      break

    case "books":
      iconFragment = <DocIcon color={color} />
      break

      case "book":
        iconFragment = <DocIcon color={color} />
        break


        case "doc":
          iconFragment = <DocIcon color={color} />
          break

    case "doc":
      iconFragment = <DocIcon color={color} />
      break

    case "menu":
      iconFragment = <MenuIcon color={color} />
      break

    case "walkthrough":
      iconFragment = <WalkthroughIcon color={color} />
      break
    case "github":
      iconFragment = <GitHubIcon color={color} />
      break

    case "meta":
      iconFragment = <LocaleIcon color={color} />
      break
    case "locale":
      iconFragment = <LocaleIcon color={color} />
      break
    case "image":
      iconFragment = <ImagefileIcon color={color} />
      break
    case "filebrowser":
      iconFragment = <FilebrowserIcon color={color} />
      break
    case "shared":
      iconFragment = <SharedIcon color={color} />
      break

    case "social":
      iconFragment = <SharedIcon color={color} />
      break

    case "refresh":
      iconFragment = <RefreshIcon color={color} />
      break

    case "table":
      iconFragment = <TableChartIcon color={color} />
      break

    case "flash":
      iconFragment = <BannerIcon color={color} />
      break

    case "banners":
      iconFragment = <BannerIcon color={color} />
      break

    case "banner":
      iconFragment = <BannerIcon color={color} />
      break

    case "seed":
      iconFragment = <SeedIcon color={color} />
      break

    case "share":
      iconFragment = <SharedIcon color={color} />
      break

    case "insight":
      iconFragment = <VersionIcon color={color} />
      break

    case "insights":
      iconFragment = <VersionIcon color={color} />
      break

    case "text":
      iconFragment = <TextIcon color={color} />
      break

    case "fing":
      iconFragment = <MarkdownIcon color={color} />
      break

    case "fings":
      iconFragment = <MarkdownIcon color={color} />
      break

    case "default":
      iconFragment = <DefaultIcon color={color} />
      break

    default:
      iconFragment = <DefaultIcon color="error" />
  }
  return <React.Fragment>{iconFragment}</React.Fragment>
}
