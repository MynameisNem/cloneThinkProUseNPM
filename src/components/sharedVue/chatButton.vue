<template>
    <div class="chat-button">
        <div class="bottom-[16px] right-[16px] fixed z-[30]">
            <div class="bottom-[100%] absolute right-0 flex flex-col mb-2">
                <div v-if="tabSelectedChat" class="space-x-2 space-y-2 items-center block justify-end"
                    style="--duration: 200ms; transition: opacity var(--duration) ease-in-out;">
                    <!-- danh mục chat -->
                    <div v-for="itemChat in listChatButton" :key="itemChat.id"
                        class="space-x-2 flex items-center justify-end"
                        style="--duration: 200ms; transition: opacity var(--duration) ease-in-out;">
                        <span class="text-[#FFFFFF] text-[14px] font-semibold whitespace-nowrap"
                            :style="itemChat.textChatButton">
                            {{ itemChat.textChatButton }}
                        </span>
                        <button :style="itemChat.classChatButton" :aria-label="itemChat.ariaChatButton">
                            <img :src="itemChat.svgSrc" :alt="itemChat.ariaChatButton">
                        </button>
                    </div>
                </div>
                <!-- button hỗ trợ trực tuyến -->
                <div @click="chatButtonOnline" class="flex items-center justify-end mt-[8px]"
                    :style="buttonSupportOnline.styleChatButtonOnline">
                    <button :style="buttonSupportOnline.classChatButtonOnline"
                        :aria-label="buttonSupportOnline.ariaChatButtonOnline">
                        <img class="w-6 h-6" v-if="changeChatButton" :src="buttonSupportOnline.svgSrcOnlineOpen"
                            :alt="buttonSupportOnline.ariaChatButtonOnline">
                        <img class="w-6 h-6" v-else :src="buttonSupportOnline.svgSrcOnlineClose"
                            :alt="buttonSupportOnline.ariaChatButtonOnline">
                    </button>
                </div>
            </div>
        </div>
        <div class="overlay" :class="{ active: showOverlay }" @click="chatButtonOnline"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabSelectedChat: false,
            changeChatButton: true,
            showOverlay: false,
            listChatButton: [
                // Gọi điện
                {
                    id: 3700,
                    styleChatButton: "transition: all var(--duration) ease-in-out; line-height: 150%",
                    textChatButton: "Gọi điện",
                    ariaChatButton: "Gọi hỗ trợ bằng số điện thoại 1900.63.3579",
                    classChatButton: {
                        'box-shadow': 'none',
                        'background-color': '#FC8800',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'overflow': 'hidden',
                        'height': '48px',
                        'width': '48px',
                        'border-radius': '9999px'
                    },
                    svgSrc: require("@/assets/iconSVG/chatButton/call.svg")
                },
                // zalo
                {
                    id: 3701,
                    styleChatButton: "transition: all var(--duration) ease-in-out; line-height: 150%",
                    textChatButton: "Zalo",
                    ariaChatButton: "Hỗ trợ bằng Zalo",
                    classChatButton: {
                        'box-shadow': 'none',
                        'background-color': '#0068ff',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'overflow': 'hidden',
                        'height': '48px',
                        'width': '48px',
                        'border-radius': '9999px'
                    },
                    svgSrc: require("@/assets/iconSVG/chatButton/zalo.svg")
                },
                // telegram
                {
                    id: 3702,
                    styleChatButton: "transition: all var(--duration) ease-in-out; line-height: 150%",
                    textChatButton: "Telegram",
                    ariaChatButton: "Hỗ trợ bằng Telegram",
                    classChatButton: {
                        'background': 'linear-gradient(203.2deg, #37aee2 21.67%, #1e96c8 70%)',
                        'box-shadow': 'none',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'overflow': 'hidden',
                        'height': '48px',
                        'width': '48px',
                        'border-radius': '9999px'
                    },
                    svgSrc: require("@/assets/iconSVG/chatButton/telegram.svg")
                },
                // facebook
                {
                    id: 3703,
                    styleChatButton: "transition: all var(--duration) ease-in-out; line-height: 150%",
                    textChatButton: "Facebook",
                    ariaChatButton: "Hỗ trợ bằng Facebook",
                    classChatButton: {
                        'background-image': 'linear-gradient(to bottom, #FF666D, #9539FE, #0191FF)',
                        'box-shadow': 'none',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'overflow': 'hidden',
                        'height': '48px',
                        'width': '48px',
                        'border-radius': '9999px'
                    },
                    svgSrc: require("@/assets/iconSVG/chatButton/facebook-chatButton.svg")
                },
                // chat ngay
                {
                    id: 3704,
                    styleChatButton: "transition: all var(--duration) ease-in-out; line-height: 150%",
                    textChatButton: "Chat ngay",
                    ariaChatButton: "Hỗ trợ bằng chat trực tuyến",
                    classChatButton: {
                        'box-shadow': 'none',
                        'background-color': '#F93920',
                        'color': 'white',
                        'display': 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'overflow': 'hidden',
                        'height': '48px',
                        'width': '48px',
                        'border-radius': '9999px'
                    },
                    svgSrc: require("@/assets/iconSVG/chatButton/chat_ngay.svg")
                }
            ],
            buttonSupportOnline: {
                styleChatButtonOnline: "--duration: 200ms; transition: opacity var(--duration) ease-in-out;",
                ariaChatButtonOnline: "Hỗ trợ trực tuyến",
                classChatButtonOnline: {
                    'background-color': '#0065ee',
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'border-radius': '9999px',
                    'height': '48px',
                    'width': '48px',
                    'color': '#ffffff'
                },
                svgSrcOnlineOpen: require("@/assets/iconSVG/chatButton/supportOnlineOpen.svg"),
                svgSrcOnlineClose: require("@/assets/iconSVG/chatButton/supportOnlineClose.svg")
            },
        }
    },
    methods: {
        chatButtonOnline() {
            this.tabSelectedChat = !this.tabSelectedChat;
            this.changeChatButton = !this.changeChatButton;
            this.showOverlay = !this.showOverlay;
        }
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 29;
    display: none;
  }
  
  .overlay.active {
    display: block;
  }
</style>